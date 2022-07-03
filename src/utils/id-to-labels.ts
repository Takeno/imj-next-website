const labels: Record<string, string> = {
  'carta-del-mese': 'Carta del mese',
  'procedure-torneo': 'Guida alle procedure di torneo',

  aru: 'Aruna Prem Bianzino',
  'nonno-scialpi': 'Francesco Scialpi',
};

export const labelFor = (str: string) => labels[str] || str;
