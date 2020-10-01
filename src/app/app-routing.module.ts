// src/app/app-routing.module.ts
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlayerComponent } from "./pages/player/player.component";
import { TestdbComponent } from './testdb/testdb.component';

const routes: Routes = [
  { path: "", component: PlayerComponent },
  { path: "**", redirectTo: "" },
  { path: 'testDB',component:TestdbComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
