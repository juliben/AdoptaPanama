export const formatDate = (date: string) => {
  const now = new Date();
  const past = new Date(date);
  const diffInMs = now.getTime() - past.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays < 1) return "Hoy";
  if (diffInDays === 1) return "Hace 1 día";
  if (diffInDays < 7) return `Hace ${diffInDays} días`;

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInDays < 30)
    return `Hace ${diffInWeeks} semana${diffInWeeks > 1 ? "s" : ""}`;

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInDays < 365)
    return `Hace ${diffInMonths} mes${diffInMonths > 1 ? "es" : ""}`;

  const diffInYears = Math.floor(diffInDays / 365);
  return `Hace ${diffInYears} año${diffInYears > 1 ? "s" : ""}`;
};
