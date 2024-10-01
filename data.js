const arrayFilhaDaPuta = [
  {
    isFreeSample: null,
    language: 'PT',
    company_id: 1,
    company_name: 'SOORO RENNER NUTRIÇÃO S/A - MATRIZ',
    language_description: 'Português',
    id_product: 'P100069',
    description_product: 'WPC80 - Concentrado Proteico De Soro De Leite Em Pó 80%',     
    type: 'NF',
    batch: 'P12301040142',
    id_partner: 'C00532',
    description_partner: 'Hexus Foods Ltda',
    address_partner: 'RodoviaRS 240, km 6,407  93180000-Portão-RS BRASIL',
    certificate_review: '00',
    item_specification: 'P1-ET-CQ-058',
    quantity: 40,
    number_nf: 126633,
    date_manufacturing: '17/12/2023',
    date_due: '17/12/2025',
    date_test: 'Invalid Date',
    date_print: '01/10/2024',
    comments: null,
    responsible_signature: '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',
    responsible_name: 'Iriane J. Henrichsen da Silva',
    responsible_post: 'Coordenadora de Controle de Qualidade',
    description_company: 'Sooro Renner Nutrição S/A SIF 1328',
    address: '(BR 163, Km 283,8 - Marechal Cândido Rondon/PR - CEP 85960-000) ',        
    date_approval: '13/02/2019',
    form_review: '00',
    responsible_register: 'P1-RC-CQ-071',
    item_table: [
  {
    method_description: 'ISO 8586:2016; 13299:2017; 5492:2017',
    parameter_description: '¹Aspecto, ¹Cor, ¹Sabor e ¹Odor',
    specification: '¹Aspecto, ¹Cor, ¹Sabor e ¹Odor',
    result: 'Característico',
    parameter_id: 'U_1_Aspecto',
    sequence: 1
  },
  {
    method_description: 'Gravimetria por balança halogenada - Isengard, Prager (2003)', 
    parameter_description: '¹Umidade (%)',
    specification: 'Gravimetria por balança halogenada - Isengard, Prager, (  ',
		result: '4,14',
    parameter_id: 'U_4_Umidade1',
    sequence: 2
  },
  {
    method_description: 'ISO 8967:2005 (IDF 134:2005)',
    parameter_description: '¹Densidade compactada (g/cm³ ',
    specification: '¹Densidade compactada (g/cm³',
    result: '-',
    parameter_id: 'U_29_DensidadeCompac',
    sequence: 3
  },
  {
    method_description: 'ISO 11869:2012 (IDF 150); AOAC 947.05',
    parameter_description: 'Acidez (% ácido lático) ',
    specification: 'Acidez (% ácido lático)     ',
    result: '1,46',
    parameter_id: 'U_6_Acidez',
    sequence: 4
  },
  {
    method_description: 'Diferenciado Titulação Fenolfetaleína',
    parameter_description: '¹Acidez (% de ácido lático diferenciado)',
    specification: '¹Acidez (% de ácido lático diferenciado)',
    result: '0,08',
    parameter_id: 'U_7_AcidezL',
    sequence: 5
  },
  {
    method_description: 'Método Mojonnier - ISO 1736:2008',
    parameter_description: 'Gordura(%) ',
    specification: 'Gordura Saturada ',
    result: '3,00',
    parameter_id: 'U_31_Gordura',
    sequence: 6
  },
  {
    method_description: 'Adaptado de IDF129A:2005 - ISO8156:2005',
    parameter_description: '¹Insolubilidade (mL)',
    specification: '¹Insolubilidade (mL)',
    result: '0,05',
    parameter_id: 'U_26_Insolubilidade',
    sequence: 7
  },
  {
    method_description: 'MAPA, 2019',
    parameter_description: 'pH (Solução 10%',
    specification: 'pH (Solução 10%',
    result: '6,42',
    parameter_id: 'U_24_pHSolucao',
    sequence: 8
  },
  {
    method_description: 'Gravimetria - ISO 5545 - IDF90 (2008)',
    parameter_description: 'Cinzas (sais minerais %) ',
    specification: 'Cinzas (sais minerais %) ',
    result: '4,69',
    parameter_id: 'U_9_Cinzas',
    sequence: 9
  },
  {
    method_description: 'Método Dumas - LECO, 2014',
    parameter_description: '¹Proteína Base Úmida ',
    specification: 'base umida ',
    result: '33,77',
    parameter_id: 'U_11_ProteinaBU',
    sequence: 10
  },
  {
    method_description: 'Cromatografia (HPLC)',
    parameter_description: 'Teor de Lactose ',
    specification: 'Teor de Lactose ',
    result: '54,40',
    parameter_id: 'U_10_TeorLactose',
    sequence: 11
  },
  {
    method_description: 'Diferença (% Base úmida*100)/(100- %Umidade)',
    parameter_description: 'Diferença (% Base úmida*100)/(100- %Umidade)',
    specification: 'Diferença (% Base úmida*100)/(100- %Umidade)',
    result: '35,23',
    parameter_id: 'U_12_ProteinaBS',
    sequence: 12
  },
  {
    method_description: 'American Dry Products Institute (ADPI) - 1990',
    parameter_description: 'Sedimentos (disco A, B ou C)',
    specification: 'Sedimentos (disco A, B ou C)',
    result: 'A',
    parameter_id: 'U_13_Sendimentos',
    sequence: 13
  },
  {
    method_description: 'GEA NIRO METHOD N° 6A, 2005',
    parameter_description: 'Dispersibilidade ',
    specification: 'Dispersibilidade ',
    result: '-',
    parameter_id: 'U_30_Dispersib',
    sequence: 14
  },
  {
    method_description: 'ISO 4833-2 (2013)',
    parameter_description: 'Aeróbios Mesófilos ',
    specification: 'Aeróbios Mesófilos /(UFC)',
    result: '120',
    parameter_id: 'U_14_AerobiosM',
    sequence: 15
  },
  {
    method_description: 'Plaqueamento - UFC/g - APHA:2004 CAP. 07',
    parameter_description: 'Coliformes totais (UFC/g)',
    specification: 'Coliformes totais (UFC/g)',
    result: '<0,3',
    parameter_id: 'U_32_ColiformesT',
    sequence: 16
  },
  {
    method_description: 'ISO 21528-2 (2020)',
    parameter_description: '¹Enterobactérias ',
    specification: '¹Enterobactérias ',
    result: '<10',
    parameter_id: 'U_17_Enterobacterias',
    sequence: 17
  },
  {
    method_description: 'ISO 7932 (2016)',
    parameter_description: '¹Bacillus ',
    specification: '¹Bacillus ',
    result: '<100',
    parameter_id: 'U_19_Bacillus',
    sequence: 18
  },
  {
    method_description: 'ISO 6888-1 (2019)',
    parameter_description: 'Estafilococos Coagulase Positiva (UFC/g)',
    specification: 'Estafilococos Coagulase Positiva (UFC/g)',
    result: 'Ausente',
    parameter_id: 'U_40_Enteroxinas',
    sequence: 19
  },
  {
    method_description: 'Plaqueamento - Compact Dry YM (AOAC N° 100401, 2014)',
    parameter_description: '¹Bolores e leveduras (UFC/g)',
    specification: '¹Bolores e leveduras (UFC/g)',
    result: '<10',
    parameter_id: 'U_18_Bolores',
    sequence: 20
  },
  {
    method_description: 'MDS 3M - AOAC 2016.01',
    parameter_description: 'Salmonella sp (valor garantido)',
    specification: '¹Salmonella sp (valor garantido)',
    result: 'Ausente',
    parameter_id: 'U_20_Salmonella',
    sequence: 21
  },
  {
    method_description: 'MDS 3M - AOAC 2016.08',
    parameter_description: 'Listeria monocytogenes (valor garantido ',
    specification: 'Listeria monocytogenes (valor garantido ',
    result: 'Ausente',
    parameter_id: 'U_21_Listeria',
    sequence: 22
  },
  {
    method_description: 'Técnica do NMP (Detecção) - ISO 7251:2005',
    parameter_description: '¹Escherichia coli (valor garantido)',
    specification: '¹Escherichia coli (valor garantido)',
    result: 'Ausente',
    parameter_id: 'U_28_Escherichia',
    sequence: 23
  },
  {
    method_description: 'Instrução Normativa N° 05 DE 23/04/2019 - PNCRC 2019',
    parameter_description: 'Resíduos de Antibióticos (valor garantido)',
    specification: 'Resíduos de Antibióticos (valor garantido)',
    result: 'Ausente',
    parameter_id: 'U_39_Residuos',
    sequence: 24
  },
  {
    method_description: 'Fotômetro de Chama, Digimed.',
    parameter_description: 'Sódio (mg/100g)',
    specification: 'Sódio (mg/100g)',
    result: '360',
    parameter_id: 'U_36_Sodio',
    sequence: 25
  },
  {
    method_description: 'VIDAS Staph Enterotoxin II - versão 05 (2010) - Lab. Externo', 
    parameter_description: '²Metais Pesados (Arsenio, Cadmio, Chumbo e Cobre) (mg/kg) (valor',
    specification: '²Metais Pesados (Arsenio, Cadmio, Chumbo e Cobre) (mg/kg) (valor',
    result: '< Limite Máximo Tolerado',
    parameter_id: 'U_41_MetaisPesado',
    sequence: 26
  },
  {
    method_description: 'Laboratório Externo',
    parameter_description: 'Micotoxinas (Aflatoxina M1) (mcg/kg) (valor',
    specification: 'Micotoxinas (Aflatoxina M1) (mcg/kg) (valor garantido)',
    result: '< Limite Máximo Tolerado',
    parameter_id: 'U_42_Micotoxina',
    sequence: 27
  }
],
    number_certificate: '53622'
  },
  {
    isFreeSample: null,
    language: 'PT',
    company_id: 1,
    company_name: 'SOORO RENNER NUTRIÇÃO S/A - MATRIZ',
    language_description: 'Português',
    id_product: 'P100115',
    description_product: 'SDM - Soro De Leite Em Po Parcialmente Desmineralizado',      
    type: 'NF',
    batch: 'PS23010068',
    id_partner: 'C00532',
    description_partner: 'Hexus Foods Ltda',
    address_partner: 'RodoviaRS 240, km 6,407  93180000-Portão-RS BRASIL',
    certificate_review: '00',
    item_specification: 'P1-ET-CQ-058',
    quantity: 1500,
    number_nf: 126633,
    date_manufacturing: '02/09/2023',
    date_due: '02/09/2024',
    date_test: '02/09/2023',
    date_print: '01/10/2024',
    comments: 'Teor de sódio valor garantido',
    responsible_signature: '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',
    responsible_name: 'Iriane J. Henrichsen da Silva',
    responsible_post: 'Coordenadora de Controle de Qualidade',
    description_company: 'Sooro Renner Nutrição S/A SIF 1328',
    address: '(BR 163, Km 283,8 - Marechal Cândido Rondon/PR - CEP 85960-000) ',        
    date_approval: '13/02/2019',
    form_review: '00',
    responsible_register: 'P1-RC-CQ-071',
    item_table:[
  {
    method_description: 'ISO 8586:2016; 13299:2017; 5492:2017',
    parameter_description: '¹Aspecto, ¹Cor, ¹Sabor e ¹Odor ',
    specification: '¹Aspecto, ¹Cor, ¹Sabor e ¹Odor ',
    result: 'Característico',
    parameter_id: 'U_1_Aspecto',
    sequence: 1
  },
  {
    method_description: 'Gravimetria por balança halogenada - Isengard, Prager (2003)', 
    parameter_description: '¹Umidade (%) ',
    specification: 'Gravimetria por balança halogenada - Isengard, Prager, ( ', 
			result: '5,39',
    parameter_id: 'U_4_Umidade1',
    sequence: 2
  },
  {
    method_description: 'ISO 8967:2005 (IDF 134:2005)',
    parameter_description: '¹Densidade compactada (g/cm³ ',
    specification: '¹Densidade compactada (g/cm³ ',
    result: '0,418',
    parameter_id: 'U_29_DensidadeCompac',
    sequence: 3
  },
  {
    method_description: 'ISO 11869:2012 (IDF 150); AOAC 947.05',
    parameter_description: 'Acidez (% ácido lático)',
    specification: 'Acidez (% ácido lático)',
    result: '1,45',
    parameter_id: 'U_6_Acidez',
    sequence: 4
  },
  {
    method_description: 'Diferenciado Titulação Fenolfetaleína',
    parameter_description: '¹Acidez (% de ácido lático diferenciado)',
    specification: '¹Acidez (% de ácido lático diferenciado)',
    result: '0,09',
    parameter_id: 'U_7_AcidezL',
    sequence: 5
  },
  {
    method_description: 'Método Mojonnier - ISO 1736:2008',
    parameter_description: 'Gordura(%) ',
    specification: 'Gordura Saturada ',
    result: '5,26',
    parameter_id: 'U_31_Gordura',
    sequence: 6
  },
  {
    method_description: 'Adaptado de IDF129A:2005 - ISO8156:2005',
    parameter_description: '¹Insolubilidade (mL)',
    specification: '¹Insolubilidade (mL)',
    result: '0,10',
    parameter_id: 'U_26_Insolubilidade',
    sequence: 7
  },
  {
    method_description: 'Gravimetria - ISO 5545 - IDF90 (2008)',
    parameter_description: 'Cinzas (sais minerais %) ',
    specification: 'Cinzas (sais minerais %) ',
    result: '3,40',
    parameter_id: 'U_9_Cinzas',
    sequence: 8
  },
  {
    method_description: 'Método Dumas - LECO, 2014',
    parameter_description: '¹Proteína Base Úmida ',
    specification: 'base umida ',
    result: '77,88',
    parameter_id: 'U_11_ProteinaBU',
    sequence: 9
  },
  {
    method_description: 'Cromatografia (HPLC)',
    parameter_description: 'Teor de Lactose ',
    specification: 'Teor de Lactose ',
    result: '9,40',
    parameter_id: 'U_10_TeorLactose',
    sequence: 10
  },
  {
    method_description: 'MAPA, 2019',
    parameter_description: 'pH (Solução 10%',
    specification: 'pH (Solução 10%',
    result: '6,51',
    parameter_id: 'U_24_pHSolucao',
    sequence: 11
  },
  {
    method_description: 'Diferença (% Base úmida*100)/(100- %Umidade)',
    parameter_description: 'Diferença (% Base úmida*100)/(100- %Umidade)',
    specification: 'Diferença (% Base úmida*100)/(100- %Umidade)',
    result: '82,32',
    parameter_id: 'U_12_ProteinaBS',
    sequence: 12
  },
  {
    method_description: 'American Dry Products Institute (ADPI) - 1990',
    parameter_description: 'Sedimentos (disco A, B ou C)',
    specification: 'Sedimentos (disco A, B ou C)',
    result: 'A',
    parameter_id: 'U_13_Sendimentos',
    sequence: 13
  },
  {
    method_description: 'GEA NIRO METHOD N° 6A, 2005',
    parameter_description: 'Dispersibilidade ',
    specification: 'Dispersibilidade ',
    result: '93,76',
    parameter_id: 'U_30_Dispersib',
    sequence: 14
  },
  {
    method_description: 'ISO 4833-2 (2013)',
    parameter_description: 'Aeróbios Mesófilos ',
    specification: 'Aeróbios Mesófilos /(UFC)',
    result: '21000',
    parameter_id: 'U_14_AerobiosM',
    sequence: 15
  },
  {
    method_description: 'Plaqueamento - UFC/g - APHA:2004 CAP. 07',
    parameter_description: 'Coliformes totais (UFC/g)',
    specification: 'Coliformes totais (UFC/g)',
    result: '<10',
    parameter_id: 'U_32_ColiformesT',
    sequence: 16
  },
  {
    method_description: 'ISO 21528-2 (2020)',
    parameter_description: '¹Enterobactérias ',
    specification: '¹Enterobactérias ',
    result: '<10',
    parameter_id: 'U_17_Enterobacterias',
    sequence: 17
  },
  {
    method_description: 'ISO 6888-1 (2019)',
    parameter_description: 'Estafilococos Coagulase Positiva (UFC/g)',
    specification: 'Estafilococos Coagulase Positiva (UFC/g)',
    result: 'Ausente',
    parameter_id: 'U_40_Enteroxinas',
    sequence: 18
  },
  {
    method_description: 'Plaqueamento - Compact Dry YM (AOAC N° 100401, 2014)',
    parameter_description: '¹Bolores e leveduras (UFC/g)',
    specification: '¹Bolores e leveduras (UFC/g)',
    result: '<10',
    parameter_id: 'U_18_Bolores',
    sequence: 19
  },
  {
    method_description: 'ISO 7932 (2016)',
    parameter_description: '¹Bacillus ',
    specification: '¹Bacillus ',
    result: '400',
    parameter_id: 'U_19_Bacillus',
    sequence: 20
  },
  {
    method_description: 'MDS 3M - AOAC 2016.01',
    parameter_description: 'Salmonella sp (valor garantido)',
    specification: '¹Salmonella sp (valor garantido)',
    result: 'Ausente',
    parameter_id: 'U_20_Salmonella',
    sequence: 21
  },
  {
    method_description: 'MDS 3M - AOAC 2016.08',
    parameter_description: 'Listeria monocytogenes (valor garantido ',
    specification: 'Listeria monocytogenes (valor garantido ',
    result: 'Ausente',
    parameter_id: 'U_21_Listeria',
    sequence: 22
  },
  {
    method_description: 'Laboratório Externo',
    parameter_description: 'Micotoxinas (Aflatoxina M1) (mcg/kg) (valor',
    specification: 'Micotoxinas (Aflatoxina M1) (mcg/kg) (valor garantido)',
    result: '< Limite Máximo Tolerado',
    parameter_id: 'U_42_Micotoxina',
    sequence: 23
  },
  {
    method_description: 'Técnica do NMP (Detecção) - ISO 7251:2005',
    parameter_description: '¹Escherichia coli (valor garantido)',
    specification: '¹Escherichia coli (valor garantido)',
    result: 'Ausente',
    parameter_id: 'U_28_Escherichia',
    sequence: 24
  },
  {
    method_description: 'Instrução Normativa N° 05 DE 23/04/2019 - PNCRC 2019',
    parameter_description: 'Resíduos de Antibióticos (valor garantido)',
    specification: 'Resíduos de Antibióticos (valor garantido)',
    result: 'Ausente',
    parameter_id: 'U_39_Residuos',
    sequence: 25
  },
  {
    method_description: 'Fotômetro de Chama, Digimed.',
    parameter_description: 'Sódio (mg/100g)',
    specification: 'Sódio (mg/100g)',
    result: '156',
    parameter_id: 'U_36_Sodio',
    sequence: 26
  },
  {
    method_description: 'VIDAS Staph Enterotoxin II - versão 05 (2010) - Lab. Externo', 
    parameter_description: '²Metais Pesados (Arsenio, Cadmio, Chumbo e Cobre) (mg/kg) (valor',
    specification: '²Metais Pesados (Arsenio, Cadmio, Chumbo e Cobre) (mg/kg) (valor',
    result: '< Limite Máximo Tolerado',
    parameter_id: 'U_41_MetaisPesado',
    sequence: 27
  },
  {
    method_description: 'AOAC 2007.06.2016',
    parameter_description: 'pH',
    specification: 'tewse 28 ',
    result: '6,51',
    parameter_id: 'U_8_pH',
    sequence: 28
  },
  {
    method_description: 'APHA (2015)',
    parameter_description: 'Esporos Termófilos Aeróbios (UFC/g)',
    specification: '29 ',
    result: '-',
    parameter_id: 'U_38_Esperos',
    sequence: 29
  },
  {
    method_description: 'ISO 8586:2016; 13299:2017; 5492:2017',
    parameter_description: 'Sedimentos Caramelizados',
    specification: '30 ',
    result: '6',
    parameter_id: 'U_43_SedCaramelizado',
    sequence: 30
  }
],
    number_certificate: '53622'
  },
  {
    isFreeSample: null,
    language: 'PT',
    company_id: 1,
    company_name: 'SOORO RENNER NUTRIÇÃO S/A - MATRIZ',
    language_description: 'Português',
    id_product: 'P100069',
    description_product: 'WPC80 - Concentrado Proteico De Soro De Leite Em Pó 80%',     
    type: 'NF',
    batch: 'P12302040138',
    id_partner: 'C00532',
    description_partner: 'Hexus Foods Ltda',
    address_partner: 'RodoviaRS 240, km 6,407  93180000-Portão-RS BRASIL',
    certificate_review: '00',
    item_specification: 'P1-ET-CQ-058',
    quantity: 960,
    number_nf: 126633,
    date_manufacturing: '07/12/2023',
    date_due: '07/12/2025',
    date_test: '07/12/2023',
    date_print: '01/10/2024',
    comments: 'Teor de Sódio Valor Garantido',
    responsible_signature: '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',
    responsible_name: 'Iriane J. Henrichsen da Silva',
    responsible_post: 'Coordenadora de Controle de Qualidade',
    description_company: 'Sooro Renner Nutrição S/A SIF 1328',
    address: '(BR 163, Km 283,8 - Marechal Cândido Rondon/PR - CEP 85960-000) ',        
    date_approval: '13/02/2019',
    form_review: '00',
    responsible_register: 'P1-RC-CQ-071',
    item_table: [
  {
    method_description: 'ISO 8586:2016; 13299:2017; 5492:2017',
    parameter_description: '¹Aspecto, ¹Cor, ¹Sabor e ¹Odor ',
    specification: '¹Aspecto, ¹Cor, ¹Sabor e ¹Odor ',
    result: 'Característico',
    parameter_id: 'U_1_Aspecto',
    sequence: 1
  },
  {
    method_description: 'Gravimetria por balança halogenada - Isengard, Prager (2003)', 
    parameter_description: '¹Umidade (%) ',
    specification: 'Gravimetria por balança halogenada - Isengard, Prager, (  ',
		  result: '2,09',
    parameter_id: 'U_4_Umidade1',
    sequence: 2
  },
  {
    method_description: 'ISO 8967:2005 (IDF 134:2005)',
    parameter_description: '¹Densidade compactada (g/cm³ ',
    specification: '¹Densidade compactada (g/cm³ ',
    result: '-',
    parameter_id: 'U_29_DensidadeCompac',
    sequence: 3
  },
  {
    method_description: 'ISO 11869:2012 (IDF 150); AOAC 947.05',
    parameter_description: 'Acidez (% ácido lático)',
    specification: 'Acidez (% ácido lático)',
    result: '0,189',
    parameter_id: 'U_6_Acidez',
    sequence: 4
  },
  {
    method_description: 'Diferenciado Titulação Fenolfetaleína',
    parameter_description: '¹Acidez (% de ácido lático diferenciado)',
    specification: '¹Acidez (% de ácido lático diferenciado)',
    result: '0,06',
    parameter_id: 'U_7_AcidezL',
    sequence: 5
  },
  {
    method_description: 'Método Mojonnier - ISO 1736:2008',
    parameter_description: 'Gordura(%) ',
    specification: 'Gordura Saturada ',
    result: '0,76',
    parameter_id: 'U_31_Gordura',
    sequence: 6
  },
  {
    method_description: 'Adaptado de IDF129A:2005 - ISO8156:2005',
    parameter_description: '¹Insolubilidade (mL)',
    specification: '¹Insolubilidade (mL)',
    result: '0,01',
    parameter_id: 'U_26_Insolubilidade',
    sequence: 7
  },
  {
    method_description: 'Gravimetria - ISO 5545 - IDF90 (2008)',
    parameter_description: 'Cinzas (sais minerais %) ',
    specification: 'Cinzas (sais minerais %) ',
    result: '4,56',
    parameter_id: 'U_9_Cinzas',
    sequence: 8
  },
  {
    method_description: 'Método Dumas - LECO, 2014',
    parameter_description: '¹Proteína Base Úmida ',
    specification: 'base umida ',
    result: '10,78',
    parameter_id: 'U_11_ProteinaBU',
    sequence: 9
  },
  {
    method_description: 'Cromatografia (HPLC)',
    parameter_description: 'Teor de Lactose ',
    specification: 'Teor de Lactose ',
    result: '82,07',
    parameter_id: 'U_10_TeorLactose',
    sequence: 10
  },
  {
    method_description: 'MAPA, 2019',
    parameter_description: 'pH (Solução 10%',
    specification: 'pH (Solução 10%',
    result: '6,30',
    parameter_id: 'U_24_pHSolucao',
    sequence: 11
  },
  {
    method_description: 'Diferença (% Base úmida*100)/(100- %Umidade)',
    parameter_description: 'Diferença (% Base úmida*100)/(100- %Umidade)',
    specification: 'Diferença (% Base úmida*100)/(100- %Umidade)',
    result: '11,00',
    parameter_id: 'U_12_ProteinaBS',
    sequence: 12
  },
  {
    method_description: 'American Dry Products Institute (ADPI) - 1990',
    parameter_description: 'Sedimentos (disco A, B ou C)',
    specification: 'Sedimentos (disco A, B ou C)',
    result: 'A',
    parameter_id: 'U_13_Sendimentos',
    sequence: 13
  },
  {
    method_description: 'GEA NIRO METHOD N° 6A, 2005',
    parameter_description: 'Dispersibilidade ',
    specification: 'Dispersibilidade ',
    result: '-',
    parameter_id: 'U_30_Dispersib',
    sequence: 14
  },
  {
    method_description: 'ISO 4833-2 (2013)',
    parameter_description: 'Aeróbios Mesófilos ',
    specification: 'Aeróbios Mesófilos /(UFC)',
    result: '100',
    parameter_id: 'U_14_AerobiosM',
    sequence: 15
  },
  {
    method_description: 'Plaqueamento - UFC/g - APHA:2004 CAP. 07',
    parameter_description: 'Coliformes totais (UFC/g)',
    specification: 'Coliformes totais (UFC/g)',
    result: '<0,3',
    parameter_id: 'U_32_ColiformesT',
    sequence: 16
  },
  {
    method_description: 'ISO 21528-2 (2020)',
    parameter_description: '¹Enterobactérias ',
    specification: '¹Enterobactérias ',
    result: '<10',
    parameter_id: 'U_17_Enterobacterias',
    sequence: 17
  },
  {
    method_description: 'ISO 6888-1 (2019)',
    parameter_description: 'Estafilococos Coagulase Positiva (UFC/g)',
    specification: 'Estafilococos Coagulase Positiva (UFC/g)',
    result: 'Ausente',
    parameter_id: 'U_40_Enteroxinas',
    sequence: 18
  },
  {
    method_description: 'Plaqueamento - Compact Dry YM (AOAC N° 100401, 2014)',
    parameter_description: '¹Bolores e leveduras (UFC/g)',
    specification: '¹Bolores e leveduras (UFC/g)',
    result: '<10',
    parameter_id: 'U_18_Bolores',
    sequence: 19
  },
  {
    method_description: 'ISO 7932 (2016)',
    parameter_description: '¹Bacillus ',
    specification: '¹Bacillus ',
    result: '<100',
    parameter_id: 'U_19_Bacillus',
    sequence: 20
  },
  {
    method_description: 'MDS 3M - AOAC 2016.01',
    parameter_description: 'Salmonella sp (valor garantido)',
    specification: '¹Salmonella sp (valor garantido)',
    result: 'Ausente',
    parameter_id: 'U_20_Salmonella',
    sequence: 21
  },
  {
    method_description: 'MDS 3M - AOAC 2016.08',
    parameter_description: 'Listeria monocytogenes (valor garantido ',
    specification: 'Listeria monocytogenes (valor garantido ',
    result: 'Ausente',
    parameter_id: 'U_21_Listeria',
    sequence: 22
  },
  {
    method_description: 'Laboratório Externo',
    parameter_description: 'Micotoxinas (Aflatoxina M1) (mcg/kg) (valor',
    specification: 'Micotoxinas (Aflatoxina M1) (mcg/kg) (valor garantido)',
    result: '< Limite Máximo Tolerado',
    parameter_id: 'U_42_Micotoxina',
    sequence: 23
  },
  {
    method_description: 'Técnica do NMP (Detecção) - ISO 7251:2005',
    parameter_description: '¹Escherichia coli (valor garantido)',
    specification: '¹Escherichia coli (valor garantido)',
    result: 'Ausente',
    parameter_id: 'U_28_Escherichia',
    sequence: 24
  },
  {
    method_description: 'Instrução Normativa N° 05 DE 23/04/2019 - PNCRC 2019',
    parameter_description: 'Resíduos de Antibióticos (valor garantido)',
    specification: 'Resíduos de Antibióticos (valor garantido)',
    result: 'Ausente',
    parameter_id: 'U_39_Residuos',
    sequence: 25
  },
  {
    method_description: 'Fotômetro de Chama, Digimed.',
    parameter_description: 'Sódio (mg/100g)',
    specification: 'Sódio (mg/100g)',
    result: '369',
    parameter_id: 'U_36_Sodio',
    sequence: 26
  },
  {
    method_description: 'VIDAS Staph Enterotoxin II - versão 05 (2010) - Lab. Externo', 
    parameter_description: '²Metais Pesados (Arsenio, Cadmio, Chumbo e Cobre) (mg/kg) (valor',
    specification: '²Metais Pesados (Arsenio, Cadmio, Chumbo e Cobre) (mg/kg) (valor',
    result: '< Limite Máximo Tolerado',
    parameter_id: 'U_41_MetaisPesado',
    sequence: 27
  },
  {
    method_description: 'American Dry Products Institute -ADPI (1990)',
    parameter_description: 'Cloretos (%)',
    specification: '312 ',
    result: '0,25',
    parameter_id: 'U_27_Cloretos',
    sequence: 28
  },
  {
    method_description: 'APHA (2015)',
    parameter_description: 'Higro Caking',
    specification: '12312 ',
    result: '-',
    parameter_id: 'U_47_HigroCaking',
    sequence: 29
  },
  {
    method_description: 'AOAC (HPLC)',
    parameter_description: 'Higro Helco',
    specification: '312312 ',
    result: '-',
    parameter_id: 'U_48_HigroRelco',
    sequence: 30
  },
  {
    method_description: 'American Dry Products Institute (ADPI) - 1990',
    parameter_description: 'Percentual de Finos (%)',
    specification: '321312 ',
    result: '-',
    parameter_id: 'U_51_PercentualFinos',
    sequence: 31
  }
],
    number_certificate: '53622'
  },
  {
    isFreeSample: null,
    language: 'PT',
    company_id: 1,
    company_name: 'SOORO RENNER NUTRIÇÃO S/A - MATRIZ',
    language_description: 'Português',
    id_product: 'P100054',
    description_product: 'WPC34 - Concentrado Proteico De Soro De Leite Em Pó 34%',     
    type: 'NF',
    batch: 'PS23020045',
    id_partner: 'C00532',
    description_partner: 'Hexus Foods Ltda',
    address_partner: 'RodoviaRS 240, km 6,407  93180000-Portão-RS BRASIL',
    certificate_review: '00',
    item_specification: 'P1-ET-CQ-047',
    quantity: 1500,
    number_nf: 126633,
    date_manufacturing: '01/11/2023',
    date_due: '01/11/2025',
    date_test: '01/11/2023',
    date_print: '01/10/2024',
    comments: 'Teor de sódio valor garantido - Resultado de coliformes totais e termotolerantes refere-se ao método NMP - ISO 4831',
    responsible_signature: 'iVBORw0KGgoAAAANSUhEUgAAAg0AAADWCAAAAAB3Fe6NAAAACXBIWXMAAA7zAAAO8wEcU5k6AAAAEXRFWHRUaXRsZQBQREYgQ3JlYXRvckFevCgAAAATdEVYdEF1dGhvcgBQREYgVG9vbHMgQUcbz3cwAAAALXpUWHREZXNjcmlwdGlvbgAACJnLKCkpsNLXLy8v1ytISdMtyc/PKdZLzs8FAG6fCPGXryy4AABL70lEQVQYGezBebDl51kf+O/zvMvvd865S++t1r5YsiWvsq0YsAEbMEu2IglJgEAyUwlFZiZVUFAUlQmVP+LwR4qZKScmlUkFaqiACctMgBg7BuwYywnyLlmWbO2Lpd6X2/fec85ved/3+U6bexqkdst9u2yr6hzO5yMNrg7F6kadiZXKYOaglBSzDVqhT7FgaW4prpIIMhwBV5fSx4EJmUhUEwftRmMszS9pcPXoM7rVRqVuGZhF1HWlLppjN+ixNLcUV4sqYqarbRzIGK4koUtww04Ls06xNL88rhYBmNMe/F37bNekVOUVd+fB7yPgvPmCpbnlcZVEipBhsrqVvnji042lNuT1avvId9YpoBM6LM0taXCVpIiaPt68K53ZstAGg0oZ4Hb+Vk/frrdYmlseV8k8RNk/l561SeS0SiG5PvTlcf/Q/gMYjT2W5pY0uDra10nuPf1/5ZakyHB4Y6/nNseC5rbhb0bLDktzy+MqlViop46340GRaqtePXTdKB31W+hXT1QxRTEszS1pcHXE/EeP/dt+Ayvp+tH3HXjTteJLt3nvqV/PW7xh/69UhqW55XG1tM2bk+1axuGaPXffEX1vrA7fef0Ht8f+WPbE0vySBlenOPlrx7JL8g9XfniU1HXeFfNtMH1707ifufYdWJpbiqsU0Etvon7PqCqKFH2mopKI0UrB1hhL80saXB3/C596YnNl8pOH/7qnFoekgEBI/8enfk4Hd/w6luaW4ip1edxU3Wi05uh7oHcSYDSBra5G0S0szS/3c9gdLRTNQR/45Seq/vqD//I2wFSogMkFULvhpq31p5vt8S3eAAiW5o7HLmWEJJrPPpdD8uvXVgmXKFYdmRR57pDLEMaEpbmj2CUPQJ099tkmef+33t3gEhJpf/+dQ/fgF0mRvsPS/PHYJaE5M//kM+MwtAORGS/WYaWTQWC34RN97TKW5o5il3oHSQjHHiT3f+vb+gkuMQhT5T1339BvTrX01mFp/ih2y5fs4/bRrPnALaGqcYnOux7xrtV2+lwZeC9Ymj+KXQo0C5P7T7Cs7L1nsOVwiTgNQcsP3CHTjz48zcVjaf4odqkU78rzn9yGpZvf0tYZl8jDpmh75MBIHjmm0QqW5o9ilwQecupoS1s5YNSCS4lKge0fhJMb7KNhaf4odonSsT//yKat33GLF/O4VKGEStcPlKcfrb0JluaPYpdiCsDGVkF141qrEFxCqSWnft8Aky4lRizNH49d2h74vjpzPrpbvvuOmEHBixkcoOH2f3z6+bfEzopiae547NJ6noYy1dIOXlFRQiEuQQGFe75lcvym5DRjaf547NK0DMBTpvsPHsgi1ge8mMuFwk79unMkBUvzx2OXNLJ3K8Wmvi7GUhlezECn4tjHleSseMPS3FHskutE3/0g/b5RSvSGr6CC1JdS9QW9smBp/njsElG6bYhZTQcILoMKSPEGVxyW5pDHLuWV5oEPNxzdc7vLYiCWFo/HLoWJNSFZ8HvN00gsLR6PXRKpnj3da/i212rnfMhYWjyKXeojmuLCaG+FWlNWLC0exS7F6Rca8bb/jXFaQrCMpcWj2KVcbyeDH8UuSpclYGnxKHZJy8Z52mhfybVYdAlLi8djt3SDKoMI38NnKJYWj8cuEdNWdFBjaXEpdm1zIm59FUuLS7FbsjGG7NuDpcWl2C05P6Uc3IulxaXYLdtsRQ+tYWlxKXYrbycJ+0dYWlyKXWJpi/hRxNLiUuySnJ9OYYfvwNLiUuwSC4UYtFhaXIpd0vF2Z/XNIywtLsUuaS9RrG6wtLg8dqkbF83FiWFpYXns0tBK9qNsiqWFpdilo2eyP3hTECwtLsUune68SOgFS4tLsUvHztD2HoRgaXEpdmljG1yplVhaXIpdOrslemBdsbTAFLu0OYUeOmjE0uJS7NJWU3DkcMHSAlPs0vaUcuu1cFhaXB67NJ54uX3NYWmBeexS0yoOixXB0sLy2KW+wGc1xdLi8tilcZboIFhaYB67NBWthFhaZB67RKo3QoilhaXYLcIbQCwtLo9dypQgChMsLSzFLqUiQQDB0uJS7BIhasTSIlNciYipFkd4URiWFpjiSggR0wKEAAiWFpjiCoQAzRdwMMDSYlNcGY1eaSsjLC02xRUJ6HjB6gqIpUXmcQUkFH57Cq6MAFCwtLA8rkyMRzeFwwEgxNLi8rgyYT55RhijEIKlxaW4AnFGuBNni6ytUrPD0uLyuAITKNFMC0YVKEmxtLA8rkBhlu3oOacH9yt8xtLi8riCItCISWO2tq9TpWJpYXlcgYMVs6NbAdfc4B1dxtLC8rgCE6jThOT2rtOKCZYWlscVKFiAM50Lh2JhLFhaXIorMELUZSPrviQxLC0ujyvQ5KH9+caNDFL1gqXLo7qMEvNP9Z+Wdu27bvzxlr5AME88roABLN7Ee4AUwdLlsbQVqk+ldjs71fP7JxIJFcMc8bgCi4mICbEGQBFi6bKci231mZ8+0601nseOrey567WVWoqYIx5XQsDlIlUNIbH0Epi81H/0fBO5WUsJMW5O1BhCxhzxuAI1Ud0WVDWVALF0Wb7qtPvFU1tWjaQX6fTUhrCYCOaIx5UYZHwWHI4IoZpg6XI6jw8+d+ZsRfHce774mJKKQjPmiMcVmMtyagNcGQoAwdLleRv82hebKNVfvvHj57bF2s5omkUxRxRX4iEbE8GgEix9FfGJtgevu/2em3uYZzWs1MQp5oniIlI7BSwyq1Axo31g6kwG60ZoFiwoanHmQJqqgIqr5NKpzWmIP/Kev/KtqfhpJYNBjj0c5onHDBn7jz10/FXXvn0oRWC4SFCmk+JGAwEgQiwmnyQLBLEvBaEee1ydTv/SW4fXp1fvTdV0wvXz1cAjR/YOc8RjJuTuvvd/4fjx2944FLpiihlSrKjtXVUSgkWVrLaSRCfqVVr1uEre+L998cAbGtflsSXWXKl9p1TME4+ZAvexz2/Zk899296IQm+YIaVrhHtGuECwqKIViKhVWtJK7oPh6ojH2rf5sc8DdFY1Pq4ONFBCwhxRzJiF06enfjI+rhSRghlRwfYWdDQihDAsqA6ZqpZzUnYOhqvVW2RPRVtyS2dlVLdipcU88Zhx6UzTR2GZeprX3mHG4AWhr2tzIChYTAJ97nxevbWeok6iuFrqYKKhaOVa9g5yy03RqZhhjihmTE70zpdASc56VniBthGpKgiIhTWYuONnTxyP45XevFNcrc5DkMWkbDXJaQmHhnnaN4Z54nGR70yalTtedw9KpGXFDvPSnjjZ1N7jAhEsqMl/PforIcn33fBjA6PBEVcnZAhVtHx4GtjGwZH9QIwTNcwRxUyWxrGaHnn1K6NJdrhIc64n07q4AIpkLB4FM9UfO1O2cnfydN0D4omrZE7paepPni6iaTASeuuUmCceM8GaJvmVG797ZepQLBTsIFCaJrOKSkKUWDCaWId89Pn/aH0l/QNP/EwtkvpouDouOZcYrfyegWXl1a/zTfCZWjBHFBdZ1mB+T9WYWtCEi1TQNAZozgYVLBgpYdhO4umOjTZ50GqNPntnuEpUGjyypm1LsV0Pac0aV3WYJx4zRRHqIi6jzjmK4CIh2o6yf3VghkKHBSPJwqD7wCOdy8Pc7ttTNLZU4iplD3Gl3zr+HFXz/n90h9+oR02KhjmimBGxQl/HWg2BncMMaewSDZx2Bc5jwaTorbTSmNFv5Wj7sqkXElepIkvH+viGZIha3bdDdPAF88RjRpBTqiqdiqjPxeMigaaivCkMMmmKBVNNfJVpX3gGwlrldddU1nrXe8PVSax7xO43TjWDCdcOXO+yoxGCeeIxQ0AJ71y03EklxIyIpKKsJJmIqGGxmHOdhNJSKJVM1w+mQW9GNVwdkT5VlLMn/cTJ+orLxRECIeaIx4waBG4w1J6hUHuHHQSZkomjqSITC6bUDaqPf+lUh4i+H7ztkPRgwDTi6pgvtX3k5Cc6icXeecSUFJCYK4oZ853RO1C0QIrDjC+KIh6EwkyJBaPd0OzZB3spFIn52n3Zm2dfY5dc54uHFmcu6QP/vVjsdXjkiFEJCOaLx4zkvgDe4RIEYEYsKp1G7T/8EBlLqlC9BkMzE8FulbqPbdXH5MoXvvi7m0l6Xj/60YS55HFRM82U6PGVaIVYVK5qK5zqrDiUUo9WjcUpYdglZWjrHLrh5In/77FpIcvqnaOsxDzymOF4nIHK4VIiZkbBgtpab9J9bUqavXRH9k6V6miCXeu0Lt3KYPzp+z562lxlOv6JlaLOMIc8ZjhtirhBwFcQkBQsqL1j/4GPnu+jZBPcsj/AlFk8id0xH5MflE/8wRfOj2OXiXtGR2KiYR55zEhKVD8K+Atmy+tDT26JK87Ev2pVBKQ6FMXuWNBOfPvEvRvWaixBf+K1lmPCXPKYkZyNOgj4CsQFxIIa5g9+/pGavQCCNw57B4jCsFshf6z/4PbpU5smddbqbfvfPPVmMMUc8pgRuwDe4RKkYJHlR58+6VlL6R3Ka/clBcEiMWN3Mo5tfq47pyZ94Mr697xz4tBXKsQc8riodNkFDbiEgGJFDQtGUygWC/T3fy9l6RvHcmtcLSAAKrIzA4IlJyAhQrrsi1KyRxpM6+yYz539RPdA+9mqNFUXuuE1e9/4hrfTwSJBzCOPGdIAcQ6XJ1gwuUIOXcjPnTwbh13nLY73783DYtjRi5PcBwejqNBEqFQBHBEb3wvhTh0/2j3uE0ssVVtb9ebveLVgnnlcZIWQEPEXhGQHunLfu7ZdqIo1ebTn7107bOGwwylySL03FZipKyAIgI7MD5545OmntqbFlYLoi2eqv/2mt918KEvImGOKi6wAEiMuQYAkFo4rWRBscq4lJcMPYDe+KiFixk/E5+gpsGI0c+LpqYCol/bs8ye2uql1TiVlIWT9uru/eX/y0mOeecwICyFVhcsiFg1DEU3+u+ze+zanXfTue2+4E6ynATvy0HrfPzrYGG82uZtMt1ue4Rm2lvvsp7G32A+mfqLruGH09pW7rwvaOW0rb5hjHhdZBiVGXAYJwYIhRHrxbjQcbXZeJR24LmtGXbAjr2yNqJPtfjqddO24Kb21ZcJGCq3TpCLMldUscbU+tHJThUy1OjnMM4+LrFAkBPwFIVnVIj/1kc88zwA7cMs/XJMc0HnsCNtfeOZdTfC9gBTRQjVvStcbHMxCPrh269pb994Tkk9VaV0apTxoYsEcU8yQBojz+AuiBJZBse2zHZhL2TvcI12NfoCL4lNnEKQHRAQs1OKSZPbifLDgLeuhtfX1ldg6c0m81j18GmTMM4+LcldMogkuIeAFWBSkN4MKRU3Kf/jcx4wKXf87P2CICSFhphv9q0nQrm680WlhiclQYT0e8q/Z+92/9P4+fffPFfqcAwExkALABF8v9MmTv3bn3aLaxSJ4GXjMCAARwcKLTYxGhl40f+6JY5TYxLX1PbhElUZ9z1FTwZwz8dnXg96t3IK9qwcPaC6UhgXFF3xjuIlHuu/Ewye3ql7DW/Gy8PhzIqJKXIKChSJiZKpQ9fpPz37SYLKKt/7gG4gXE77i+ef9t8s1dKOhxtG+UN+yjnFtomZaOsoUwUzxDVLWmuq//3Tfxt+2gTXf/8q/jZeBx0UCQgVfiRAskLbO4rMfVx/ZfOq8FZN27dAdr88OL9aH24eYvEr3wA0qCaNDq3XVGsUspFhKaF27vW5q+AZhG1NysTCjNT12M14OHjMkSAguSwSLIrQkLKa1yb9Oz7pu4Jze8b++EXXCi3n7pxliokLC4Htfsg8pe6pACM/2+aHFgm8Qn4Dgu973rtNw9iG8HDxeSHBZIlgYJSSQvv8X2ydDyMOcR3e8+ZV1j0u51FttIsXBRJgrE8tJtKgpKdSCcwKh4BsjqW/vfE3/TLc1dN5/8414OXjMiICA4DJEsDhSEBX93PgDk7LlQ6/VXT/96kGzuh3wYr16S6TjBSJAT+/MAAEULUi67FEo+MaQuD0I//d9n3n2GV17wyvfYXg5eOyGCLEgqhSya9/77ESblcbWhndf/6bcx0kkXszTzCKzAyGgeEOCuCImlKlRzVKmhYJvDGmHifoWd/Odg3jbTc4XvAw8Zginjq4oLkEANDMVirAo5pMmcTRVluiePP7ZkyguB7vpunengkAhLkFQXIESIoTAQAEKqCa0YgV9C0HBN4pmEcOb8acMLwuPGXFBSQouJSABUSFNIJhTyQvFW1dV5fx7PrMpyXu+cvQ9VeeoPdQVXAUSQlwgWCgeF/koJAWXQUJAAShKzKeq9Bac1u2gf+TRaR/QjfDmlb/tKYUS2DvsjhBCMyHNKBQsEo8ZqgOEQlxKCAoIiBBzqw3R2MPX/b/6+PGszvV/ow7Hv2vwza/7vrrrXZWxa4ILeAEAChaIxwwhECm4DIEAQhMBTDCfnFpxNXPB2eMqg0b9d/t7u6Orx/fU2fvUeuwOAYgI5AIAgkXi8WecgBmXIwIqaVDMLddrLJ3glz/4VCtusvIdN7yp/ncbo/YT04RCBGKXBIQKoc4pIMQCUcyoeie5Jy5DBOyoCgjmlzK72k1PSRU5nN54jWv7ROu3ykALiV0iQDglRBXEYvGYEfUOJVNwKYoAHI9qkCwO84kOOZY/eu8T53xbpW//ph8O1BgmQ906diO87xS7JKSIEF9GKhaJYiYhaHImuJQJRI1JBALzmFM0uOK3ixkd4+qqJALFsYtbCFYcdklNmCsaCBgUC8VjZrB/zSONN/biKxACOe+8UhTzyhkd/sUX7/dVqu58x49lV4hDRdt664vVjTWTx26JUwRvkKAwCBaIYmYaK3FeDZcQAfSCroGCMMypzll/ZrIhWaKsXVt8Fu2YOOw12UAQsEukUVVFYErBYvGYqQ/t99ZtnN2PSwjEeREkganLgvnkY/fQg/9lAKa9r/n7bzFTyuCazvfOnr/2ds2q2C2CYHGl5CJQYoEoZlqpVbTgKwjpFMhtMYgI5tW0PPy4diZxdNuqVZ4s9M58Z1tdhATskohARAApHRaNx4zqKMDGPS5hQlEhcwacmDnMJ1r13imdG9z0/T/kSrKYSnV70jRKT92SHAt2iQAp6kzYOQGxSBQX5cpb2m5xKRFRBQwOSlPMKd9+fOMUgHjnYdFAn7y2h0MetCXBZcNukQApQrWJYMF4zIQSfWk3x7iECMQpkI1UwhfMp/yR585VDcJt7wJLrgpE/GuflvEgnz2fnZDYHREAAgFsagIhFojHDG2gYtOMS9Do1BnYuWIiWUFzuTLLw2l85MTJ7PYffq0UKbEAVOJrJFQWURBfH6auC8iD9Ieb6Hy4/e4ckKNBM31Z92oonaIIXoKFLpqYUiSrmoWjzRl2pwn23eaaNzqzmCD0XTBXQGeaA4viZSaw0NaJzhWTHIhLiCY6Cr4aj5mCNdE8bXEJgUAFkj3xZUbn6UoXQxvzR7c+WqU7r/N3wPmcKk3E18po6kBTfH04K0L67fg5QNLef3yk6hSSVYSiddXnkHvipTnxzEHoGg3Sh883p9vTKZ927GJ3ch9TzOLMFSEdjaoUmDNzxMtLiiCHgpBzriTgUqR4AWH4KjxmqAe9t0mHSwnhVJALIQBCb7CoUuB+fuPjvWvCufDZV/zAXb2L7OGT4mvkDEIKvk4E5mnuyY1zVVrZf83bQ1afSKHAWIVEl6ZqEOLySim+YlvlIc8/+97Js2jQqdtKpX709DNHfnYlkZoCoMlJBLJpLEWcCV5ehRV6LVrUB99p8ngxbwUwiOKr8JhRWRNh1+NSBL0KcsGfyuKA0jgnvG9jPFXvj9ebz3zLzQ4gVfA1UzEzhIKvDxO6Avs01OrJrXfR+oGAjiSEwTmYTUOrxEvQMsrj0XqHzn9m/PG0VRUSWaTN9dnPPfXQXVWdQQMonomiQaZlPbWjhJdX3XUUcSxStCsuEC+WVFQoRnwVHheZE5a+w2V4BQwQIVE86IuP6X/ffDa2zjAJPp36jQd+tk1VlbLia2UABYavFxHS4YHTaPz+77otWCgmcFlN1GLMXZIGUMNLUGllvTtfPfm+h5+bTHtttfhSgq43DBvb/+zQT163z9fGXHUdJBbXi49THbYOL6/GqUmvUuXsc6AJXkx8ykQkvhqPi1hGjnmCSxHwIjRCCMBrSVHqSfX5KaaDzpVgWfyT4/ODiEIR4mujRRwVWfD1IUChs6enXlnefktB6MUlBwEoo2HW5LqtKHgpfW1G1m7jc0ePOlNN0bx5pOy2Rp6nT53Uw72VWrLE7C1pRLMmvcfLzhmcbwYlV0ITZ3gxMwQWmOKr8LjIlf11l8e4hFDEq8CMABVIgcj9n2wcI5j3vFHiJ8c5bW4+9Oq9rYngayV06DXi60WKECxntoQ3HHmll1ZUTUxNUGRtpaGwP34z8VIGTW3j9WM//+kzQ6e+93EF+1hvbI710BRlGj948E4fWJJ4fPLz/+Psinv34S1fJU+8vILlYJPf2Th54Dtu2I9SBC9Wn3lys7F91ZvwVXjMWCjrsStTXEoAFYDEl4l2XhD4XCrsNA6/CXiy7UsrzxweqC9F8TUipWy7dcHXSwlCSxOJ7TX7HbpgZBmmooISRqNzcKWcudnwUrpgFqYnTmzFScxFKl0L1/nh4+ecNb6rpm76XM1MCTA7efbZzRU9trraFl8EL68izra6J/vj22erNVHiEs3GiXGfsYKvxmPGRNeve7w/+9k3wEsRE8xQEYcEDKDLzirLsch7WoVb+amb3ixh+5MPIDbP4Eb0GjrxxSFHM58s0CXP7KV3sa1zN2q8EDu0CM2DcL0zURA7RD76+C+6wa2/aiZAqTIu0vKhz//RyZH/P+8hsycuoV1tsFCK7wYJgplS5+L+nxPA1P/giH1VROB7KLL35MGto8pyRkG8BNFmID99b1d8lYbft/+tetu6S/yl3zrFwaH9+x7jT77CN+Kzpz32K49aPI9/s+f/EFcUME1OKVIQm5hd9qbmeicC7SKRq8zYOYokn+reJyd50EIx40s/7BzFLGYhBDtMYVQHc71TIou3EtDVWf/fE+/151wKnzr0X7IpcZFL8B/7/U+fgC8qdv3qbwIl9orLUMzEgkCDTKIvySCYIWnO03JWkJA+R7XApNmivPqeQWX79kW2VRkHFe3qQICORTNXshRXxJNBpr7hcFo7xUVZfCiFmoJzWoiZHDbP+3xus6MzidpgxlRKObXpp13bljIgLlHgWcxyjnnYqilmpKevp01XKt13IPiEGVHSWDkAzAkvrVub+Mm2RZZVHHzt3a87iJ6+kiBqhw4fHNxeNeaFdLrd9cYmT8fIRSwrEZzrrPcyHWRlSIOeEtWIrMx02TRRM3OF2AXzvqs6DnBRl+tkAjopIk4w41VccLkzOrAwCEpd+qqwnG+7M96Yu2QQXGTaBZdwZkpLKGjzmay9ZsHleFzUDm99/bkvnXz0LZUoQMEOp8KVTvmlvdk7LaXSqdp/eD5nx9uPvNpPHX/o+/96g+aBA+MgrkP5z+9/cstcqL/t1v+ZxaVBZx6QoI5p1LJE7OgH7PS+/K523/DHrnl9McWOkH55e1wGR9/1tu+suuJWOuyIzYN/8r7TmeHML4TfZhMLXszDqKHQ05JaIGY0JGx/cMPHPHwTOhPMEFT6vQNArGu9EJcnVfP59zwTBu0o/k/fclcp2veqYe+BzWzVd75TNWR6KUD3gfc9N8wY9F/0uc7mQPNs69XsUXz6cDp+3fe0VUmImbAoWoJRTDlI7D5y9pz9k8xh',
    responsible_name: 'Iriane J. Henrichsen da Silva',
    responsible_post: 'Coordenadora de Controle de Qualidade',
    description_company: 'Sooro Renner Nutrição S/A SIF 1328',
    address: '(BR 163, Km 283,8 - Marechal Cândido Rondon/PR - CEP 85960-000) ',        
    date_approval: '13/02/2019',
    form_review: '00',
    responsible_register: 'P1-RC-CQ-071',
    item_table: [
  {
    method_description: 'ISO 8586:2016; 13299:2017; 5492:2017',
    parameter_description: '¹Aspecto, ¹Cor, ¹Sabor e ¹Odor ',
    specification: '¹Aspecto, ¹Cor, ¹Sabor e ¹Odor ',
    result: 'Característico',
    parameter_id: 'U_1_Aspecto',
    sequence: 1
  },
  {
    method_description: 'Gravimetria por balança halogenada - Isengard, Prager (2003)', 
    parameter_description: '¹Umidade (%) ',
    specification: 'Gravimetria por balança halogenada - Isengard, Prager, ( ',
		result: '2,09',
    parameter_id: 'U_4_Umidade1',
    sequence: 2
  },
  {
    method_description: 'ISO 8967:2005 (IDF 134:2005)',
    parameter_description: '¹Densidade compactada (g/cm³ ',
    specification: '¹Densidade compactada (g/cm³ ',
    result: '-',
    parameter_id: 'U_29_DensidadeCompac',
    sequence: 3
  },
  {
    method_description: 'ISO 11869:2012 (IDF 150); AOAC 947.05',
    parameter_description: 'Acidez (% ácido lático)',
    specification: 'Acidez (% ácido lático)',
    result: '0,189',
    parameter_id: 'U_6_Acidez',
    sequence: 4
  },
  {
    method_description: 'Diferenciado Titulação Fenolfetaleína',
    parameter_description: '¹Acidez (% de ácido lático diferenciado)',
    specification: '¹Acidez (% de ácido lático diferenciado)',
    result: '0,06',
    parameter_id: 'U_7_AcidezL',
    sequence: 5
  },
  {
    method_description: 'Método Mojonnier - ISO 1736:2008',
    parameter_description: 'Gordura(%) ',
    specification: 'Gordura Saturada ',
    result: '0,76',
    parameter_id: 'U_31_Gordura',
    sequence: 6
  },
  {
    method_description: 'Adaptado de IDF129A:2005 - ISO8156:2005',
    parameter_description: '¹Insolubilidade (mL)',
    specification: '¹Insolubilidade (mL)',
    result: '0,01',
    parameter_id: 'U_26_Insolubilidade',
    sequence: 7
  },
  {
    method_description: 'Gravimetria - ISO 5545 - IDF90 (2008)',
    parameter_description: 'Cinzas (sais minerais %) ',
    specification: 'Cinzas (sais minerais %) ',
    result: '4,56',
    parameter_id: 'U_9_Cinzas',
    sequence: 8
  },
  {
    method_description: 'Método Dumas - LECO, 2014',
    parameter_description: '¹Proteína Base Úmida ',
    specification: 'base umida ',
    result: '10,78',
    parameter_id: 'U_11_ProteinaBU',
    sequence: 9
  },
  {
    method_description: 'Cromatografia (HPLC)',
    parameter_description: 'Teor de Lactose ',
    specification: 'Teor de Lactose ',
    result: '82,07',
    parameter_id: 'U_10_TeorLactose',
    sequence: 10
  },
  {
    method_description: 'MAPA, 2019',
    parameter_description: 'pH (Solução 10%',
    specification: 'pH (Solução 10%',
    result: '6,30',
    parameter_id: 'U_24_pHSolucao',
    sequence: 11
  },
  {
    method_description: 'Diferença (% Base úmida*100)/(100- %Umidade)',
    parameter_description: 'Diferença (% Base úmida*100)/(100- %Umidade)',
    specification: 'Diferença (% Base úmida*100)/(100- %Umidade)',
    result: '11,00',
    parameter_id: 'U_12_ProteinaBS',
    sequence: 12
  },
  {
    method_description: 'American Dry Products Institute (ADPI) - 1990',
    parameter_description: 'Sedimentos (disco A, B ou C)',
    specification: 'Sedimentos (disco A, B ou C)',
    result: 'A',
    parameter_id: 'U_13_Sendimentos',
    sequence: 13
  },
  {
    method_description: 'GEA NIRO METHOD N° 6A, 2005',
    parameter_description: 'Dispersibilidade ',
    specification: 'Dispersibilidade ',
    result: '-',
    parameter_id: 'U_30_Dispersib',
    sequence: 14
  },
  {
    method_description: 'ISO 4833-2 (2013)',
    parameter_description: 'Aeróbios Mesófilos ',
    specification: 'Aeróbios Mesófilos /(UFC)',
    result: '100',
    parameter_id: 'U_14_AerobiosM',
    sequence: 15
  },
  {
    method_description: 'Plaqueamento - UFC/g - APHA:2004 CAP. 07',
    parameter_description: 'Coliformes totais (UFC/g)',
    specification: 'Coliformes totais (UFC/g)',
    result: '<0,3',
    parameter_id: 'U_32_ColiformesT',
    sequence: 16
  },
  {
    method_description: 'ISO 21528-2 (2020)',
    parameter_description: '¹Enterobactérias ',
    specification: '¹Enterobactérias ',
    result: '<10',
    parameter_id: 'U_17_Enterobacterias',
    sequence: 17
  },
  {
    method_description: 'ISO 6888-1 (2019)',
    parameter_description: 'Estafilococos Coagulase Positiva (UFC/g)',
    specification: 'Estafilococos Coagulase Positiva (UFC/g)',
    result: 'Ausente',
    parameter_id: 'U_40_Enteroxinas',
    sequence: 18
  },
  {
    method_description: 'Plaqueamento - Compact Dry YM (AOAC N° 100401, 2014)',
    parameter_description: '¹Bolores e leveduras (UFC/g)',
    specification: '¹Bolores e leveduras (UFC/g)',
    result: '<10',
    parameter_id: 'U_18_Bolores',
    sequence: 19
  },
  {
    method_description: 'ISO 7932 (2016)',
    parameter_description: '¹Bacillus ',
    specification: '¹Bacillus ',
    result: '<100',
    parameter_id: 'U_19_Bacillus',
    sequence: 20
  },
  {
    method_description: 'MDS 3M - AOAC 2016.01',
    parameter_description: 'Salmonella sp (valor garantido)',
    specification: '¹Salmonella sp (valor garantido)',
    result: 'Ausente',
    parameter_id: 'U_20_Salmonella',
    sequence: 21
  },
  {
    method_description: 'MDS 3M - AOAC 2016.08',
    parameter_description: 'Listeria monocytogenes (valor garantido ',
    specification: 'Listeria monocytogenes (valor garantido ',
    result: 'Ausente',
    parameter_id: 'U_21_Listeria',
    sequence: 22
  },
  {
    method_description: 'Laboratório Externo',
    parameter_description: 'Micotoxinas (Aflatoxina M1) (mcg/kg) (valor',
    specification: 'Micotoxinas (Aflatoxina M1) (mcg/kg) (valor garantido)',
    result: '< Limite Máximo Tolerado',
    parameter_id: 'U_42_Micotoxina',
    sequence: 23
  },
  {
    method_description: 'Técnica do NMP (Detecção) - ISO 7251:2005',
    parameter_description: '¹Escherichia coli (valor garantido)',
    specification: '¹Escherichia coli (valor garantido)',
    result: 'Ausente',
    parameter_id: 'U_28_Escherichia',
    sequence: 24
  },
  {
    method_description: 'Instrução Normativa N° 05 DE 23/04/2019 - PNCRC 2019',
    parameter_description: 'Resíduos de Antibióticos (valor garantido)',
    specification: 'Resíduos de Antibióticos (valor garantido)',
    result: 'Ausente',
    parameter_id: 'U_39_Residuos',
    sequence: 25
  },
  {
    method_description: 'Fotômetro de Chama, Digimed.',
    parameter_description: 'Sódio (mg/100g)',
    specification: 'Sódio (mg/100g)',
    result: '369',
    parameter_id: 'U_36_Sodio',
    sequence: 26
  },
  {
    method_description: 'VIDAS Staph Enterotoxin II - versão 05 (2010) - Lab. Externo', 
    parameter_description: '²Metais Pesados (Arsenio, Cadmio, Chumbo e Cobre) (mg/kg) (valor',
    specification: '²Metais Pesados (Arsenio, Cadmio, Chumbo e Cobre) (mg/kg) (valor',
    result: '< Limite Máximo Tolerado',
    parameter_id: 'U_41_MetaisPesado',
    sequence: 27
  },
  {
    method_description: 'American Dry Products Institute -ADPI (1990)',
    parameter_description: 'Cloretos (%)',
    specification: '312 ',
    result: '0,25',
    parameter_id: 'U_27_Cloretos',
    sequence: 28
  },
  {
    method_description: 'APHA (2015)',
    parameter_description: 'Higro Caking',
    specification: '12312 ',
    result: '-',
    parameter_id: 'U_47_HigroCaking',
    sequence: 29
  },
  {
    method_description: 'AOAC (HPLC)',
    parameter_description: 'Higro Helco',
    specification: '312312 ',
    result: '-',
    parameter_id: 'U_48_HigroRelco',
    sequence: 30
  },
  {
    method_description: 'American Dry Products Institute (ADPI) - 1990',
    parameter_description: 'Percentual de Finos (%)',
    specification: '321312 ',
    result: '-',
    parameter_id: 'U_51_PercentualFinos',
    sequence: 31
  }
],
    number_certificate: '53622'
  }
]