import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less']
})
export class BreadcrumbComponent implements OnDestroy {
  public titulo: string;
  public tituloSubs$: Subscription;

  constructor ( private router: Router ) {
    this.tituloSubs$ = this.tituloRuta()
    .subscribe( ({ titulo }) => {
      this.titulo = titulo;
      document.title = titulo;
    });
  }

  ngOnDestroy(): void {
      this.tituloSubs$.unsubscribe();
  }

  tituloRuta() {
    return this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data),
    );
  }
}
