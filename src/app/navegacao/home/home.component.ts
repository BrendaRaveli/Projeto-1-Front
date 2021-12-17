import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html'

})
export class HomeComponent {

 
  ngOnInit() {
    this.card(); 
    console.log(this.cards);
    
  }
    card(){
      return this.cards
    
    }
  
    public cards = [{
      nome:"Multiplataforma",
      texto:"Lorem ipsum dolor",
      imagem:"https://www.pngkey.com/png/full/699-6998196_apps-para-eventos-multiplataformas.png"
  
    },
    {
      nome:"Performance",
      texto:"Lorem ipsum dolor2",
      imagem:"https://w7.pngwing.com/pngs/243/739/png-transparent-performance-management-advertising-performance-improvement-infographic-miscellaneous-photography-human-resources.png"
    
    },
    {
      nome:"Produtividade",
      texto:"Lorem ipsum dolor3",
      imagem:"https://s3.amazonaws.com/mlabs-s3-blog/wp-content/uploads/2016/05/produtividade.png"
    },
    {
      nome:"Funcionalidade",
      texto:"Lorem ipsum dolor4",
      imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjGSNpXMQkjqJ4V10_hxcZ1yYmhB3g-aBbSA&usqp=CAU"
    },
    ]
    
    title = 'MeuProjeto';
  }
  
  
  