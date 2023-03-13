import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.less']
})
export class RxjsComponent implements OnDestroy {
  public observableSubs: Subscription;
  public intervalSubs: Subscription;

  constructor() {
    this.observableSubs = this.returnObservable().pipe(
      retry(1)
    ).subscribe({
      next: (v) => console.log('Subscribe:', v),
      error: (e) => console.warn('Error: ', e),
      complete: () => console.info('Observer terminado')
    });

    this.intervalSubs = this.returnInterval()
      .subscribe(
        (valor) => console.log('Valor: ', valor)
      )
  }

  ngOnDestroy(): void {
    this.observableSubs.unsubscribe();
    this.intervalSubs.unsubscribe();
  }

  returnObservable(): Observable<number> {
    let num = 0;

    return new Observable<number> ( observer => {
      const contador = setInterval( () => {
        num++;
        
        observer.next(num);

        if ( num === 4) {
          clearInterval(contador);
          observer.complete();
        }

        if ( num === 2 ) {
          observer.error('Llegamos al 2');
        }
      }, 1000)
    });
  }

  returnInterval(): Observable<number> {
    return interval(500)
      .pipe(
        take(10),
        map(valor => valor + 1),
        filter( valor => ( valor % 2 === 0 ) ? true : false),
        
      );
  }

}
