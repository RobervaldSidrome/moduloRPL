import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { RegistroParada } from "../../pages/registroparada/registroparada.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { FecharOcorrenciaRpl } from "../../pages/fecharocorrenciarpl/fecharocorrenciarpl.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { RegistroResponsavel } from '../../pages/registroresponsavel/registroresponsavel.component';
import { RegistroSolucao } from 'src/app/pages/registrosolucao/registrosolucao.component';
import { ListRegistroParadaComponent } from 'src/app/pages/registroparada/list-registroparada/list-registro-parada.component';
import { ListFecharocorrenciaComponent } from 'src/app/pages/fecharocorrenciarpl/list-fecharocorrencia/list-fecharocorrencia.component';
import { ListResponsavelComponent } from 'src/app/pages/registroresponsavel/list-responsavel/list-responsavel.component';
import { ListSolucaoparadaComponent } from 'src/app/pages/registrosolucao/list-solucaoparada/list-solucaoparada.component';

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "registroparada", component: RegistroParada},
  { path: "list-registroparada", component: ListRegistroParadaComponent},
  { path: "registroresponsavel", component: RegistroResponsavel},
  { path: "list-responsavel", component: ListResponsavelComponent},
 // { path: "icons", component: IconsComponent },
 // { path: "maps", component: MapComponent },
  //{ path: "notifications", component: NotificationsComponent },
  { path: "fecharocorrenciarpl", component: FecharOcorrenciaRpl },
  { path: "list-fecharocorrencia", component: ListFecharocorrenciaComponent},
  { path: "registrosolucao", component: RegistroSolucao},
  { path: "list-solucacaoparada", component: ListSolucaoparadaComponent}
  //{ path: "tables", component: TablesComponent }
 // { path: "typography", component: TypographyComponent },
  // { path: "rtl", component: RtlComponent }
];
