export function setDataHora() {
  const agora = new Date();
  const dia = agora.toLocaleDateString("pt-BR", { weekday: "long" });
  const dataCompleta = agora.toLocaleDateString("pt-BR");
  const hora = agora.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: undefined,
    hour12: false,
  });

  const dataHora = `${dia} (${dataCompleta}) às ${hora}`;
  return dataHora;
}

export default setDataHora;
