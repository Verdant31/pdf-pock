import express from 'express';
import path from 'path';
import puppeteer from 'puppeteer';
import exphbs from 'express-handlebars';
import { fileURLToPath } from 'url';
import base64 from 'node-base64-image'
import PDFMerger  from 'pdf-merger-js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

app.post('/generate-pdf', async (req, res) => {
  try {
    const { data } = req.body;
    // Juntar os conteudos com base na informação de cada header
    const contents = req.body.headers.map(header => {
      return {
        headerContent: header,
        tableContent: req.body.data.filter(item => item.header === header.key)
      }
    })

    const logo = 'data:image/png;base64,' + await base64.encode('https://sooro.com.br/wp-content/uploads/2020/09/sooro-by-the-way.png', {
      string: true,
      headers: {
        "User-Agent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
      }
    });

    const browser = await puppeteer.launch();
    const merger = new PDFMerger();

    for (const content of contents) {
      const html = await new Promise((resolve, reject) => {
        app.render('template', { data: content.tableContent }, (err, renderedHtml) => {
          if (err) reject(err);
          else resolve(renderedHtml);
        });
      });
      const page = await browser.newPage();


      await page.setContent(html, { waitUntil: 'networkidle2' });    
      
      const headerHtml = await new Promise((resolve, reject) => {
        app.render('header', { data: content.headerContent }, (err, renderedHtml) => {
          if (err) reject(err);
          else resolve(renderedHtml);
        });
      });

      await merger.add(await page.pdf({
        format: 'A4',
        path: 'relatorio.pdf',
        printBackground: true,
        displayHeaderFooter: true,
        margin: { top: '150px', bottom: '200px' },
        headerTemplate: headerHtml,
        footerTemplate:`
        <style>
        span.logo { height: 50px; width:200px; content: url("${logo}")}
        </style>
        <footer style="font-size:6px;width:100%; background:green;height:150px;flex-direction:column; display:flex; align-items:center">
            <span class="logo"></span>
            <h1>UM MONTE DE INFORMAÇÃO LALALLALALALALAL</h1>
            <h1>UM MONTE DE INFORMAÇÃO LALALLALALALALAL</h1>
            <h1>UM MONTE DE INFORMAÇÃO LALALLALALALALAL</h1>
        </footer>
        `,
      }));
    }

    await merger.save("relatorio.pdf");

    await browser.close()

    res.contentType('application/pdf');
    res.setHeader('Content-Disposition', 'attachment;filename=generated.pdf');
  } catch (error) {
    console.log(error); 
    res.status(500).send('Erro ao gerar o PDF');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
