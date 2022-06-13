const labels: Record<string, string> = {
  'carta-del-mese': 'Carta del mese',
};

export const labelFor = (str: string) => labels[str] || str;
