import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { FecharOcorrenciaRpl } from "../../pages/fecharocorrenciarpl/fecharocorrenciarpl.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RegistroParada } from 'src/app/pages/registroparada/registroparada.component';
import { RegistroResponsavel } from 'src/app/pages/registroresponsavel/registroresponsavel.component';
import { RegistroSolucao } from 'src/app/pages/registrosolucao/registrosolucao.component';
import { ListRegistroParadaComponent } from 'src/app/pages/registroparada/list-registroparada/list-registro-parada.component';
import { EditRegistroParadaComponent } from 'src/app/pages/registroparada/edit-registroparada/edit-registro-parada.component';
import { EditFecharocorrenciaComponent } from 'src/app/pages/fecharocorrenciarpl/edit-fecharocorrencia/edit-fecharocorrencia.component';
import { ListFecharocorrenciaComponent } from 'src/app/pages/fecharocorrenciarpl/list-fecharocorrencia/list-fecharocorrencia.component';
import { ListResponsavelComponent } from 'src/app/pages/registroresponsavel/list-responsavel/list-responsavel.component';
import { ListSolucaoparadaComponent } from 'src/app/pages/registrosolucao/list-solucaoparada/list-solucaoparada.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    RegistroParada,
    ListRegistroParadaComponent,
    EditRegistroParadaComponent,
    RegistroResponsavel,
    ListResponsavelComponent,
    FecharOcorrenciaRpl,
    ListFecharocorrenciaComponent,
    EditFecharocorrenciaComponent,
    RegistroSolucao,
    ListSolucaoparadaComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
