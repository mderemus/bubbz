import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGroupComponent } from './add-group/add-group.component';
import { GroupListComponent } from './group-list/group-list.component';

const routes: Routes = [
  {
    path: 'group-list',
    component: GroupListComponent,
  },
  {
    path: 'add-group',
    component: AddGroupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class GroupRoutingModule { }
