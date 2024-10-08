import { Router, request, response } from "express";
import { usuariosRoutes } from "./usuarios.routes";
import { unidadeRoutes } from "./unidade.routes";
import { servicosRoutes } from "./servicos.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { atendimentoRoutes } from "./atendimento.routes";
import { auditoriaRoutes } from "./auditoria.routes";
import { comentariosRoutes } from "./comentarios.routes";
import { relatorioRoutes } from "./relatorio.routes";

/* Nossas rotas ficam aqui e são exportadas para o nosso server.ts  */

const router = Router();
router.get("/", (request, response) => {
  return response.json({ message: "ok" });
});
router.use('/auth', authenticateRoutes)
router.use("/unidades", unidadeRoutes);
router.use("/servicos", servicosRoutes);
router.use("/usuarios", usuariosRoutes);
router.use(authenticateRoutes);
router.use("/atendimentos", atendimentoRoutes);
router.use("/auditoria", auditoriaRoutes);
router.use("/comentarios", comentariosRoutes);
router.use('/relatorios', relatorioRoutes)

export { router };
//nivel, nome, nickname, status, password, email
