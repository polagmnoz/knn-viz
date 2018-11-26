import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {observable} from 'mobx'
import { store } from '../../store/DataStore';
import * as d3 from "d3";
import coordinator from '../../json/coordinator.json';
import GenViz from '../../components/GenViz/GenViz';
import Genericplan from '../../components/Genericplan/Genericplan';
import Header from '../../components/Header/Header';
import head2 from '../../head2.png'
import head3 from '../../head3.png'
import FilterResult from '../../components/FilterResult/FilterResult';
@observer class Home extends Component {
    @observable squad = [];
    @observable coor = coordinator;
    @observable vecinos = [];
    @observable puntajes = {}
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChangea = this.handleChangea.bind(this);
        this.handleChangeb = this.handleChangeb.bind(this);
        this.handleChangeb = this.handleChangeb.bind(this);
        this.handleSquad = this.handleSquad.bind(this);
        
    }


  
    handleSquad(e) {
        let value = e.target.value;
        this.squad.push(value)
        console.log(this.squad);
        
    }
    handleChangea(e) {
        let value = e.target.value;
        store.person1 = value;
    }
    handleChangeb(e) {
        let value = e.target.value;
        store.person2 = value;
    }
    handleChange1(e) {
        let value = e.target.value;
        store.person1 = value;
    }

    handleChange2(e) {
        let value = e.target.value;
        store.person2 = value;
    }
    onSubmit() {
    }
  
      render(){
        
                     //https://i2.wp.com/downthetubes.net/wp-content/uploads/2018/09/Hilda-Promo.jpg?resize=870%2C489&ssl=1
        //https://i.pinimg.com/564x/e0/a3/65/e0a3654e681f38d1ed778b24027f9d37.jpg
        //https://pbs.twimg.com/media/Dn8VvxPXgAAm63d.jpg 
        //https://www.booktrust.org.uk/globalassets/images/news-and-blogs/blogs-2018/09.-september/hilda/hilda-16x9.jpg?w=1200&h=675&quality=70&anchor=middlecenter 
        return <div>  
        <header>
            <div class="parent">
                <div class="child home">
                </div>
            </div >
            <div  class="overlay" ></div>
            <h1 class="t" href="#">PLANICON</h1>
        </header>   
        <div className= 'maincontainer'>
        <GenViz data = {store.data} coor = {this.coor}></GenViz>
            
            <section id='genresults'>
            <Genericplan neighs={store.genneigbhors} color ='#81C7E2' 
        title = 'Para un plan fuera de lo normal'
        description ='enen todos los aspectos son:'scores={store.genneigbhorsScores}></Genericplan>
           <Genericplan neighs={store.comicNeighs} color ='#F49672' 
        title = 'Para un conversar de comics y series'
        description ='en gustos relacionados con literatura y novelas gráficas son:' 
        scores={store.comicNeighsScores}></Genericplan>
           
            </section>
        
        <section id='head'>
            <Header image={head2} title='¿CON QUIÉN ARMARÍA PLAN ' p='Conoce con quienes saldría 'color='#F49672' ></Header>
            <div id='filters'>
            <button className='filter-btn' onClick={(e) => { store.pollOne(5); 
                this.vecinos = store.pollOneN; this.puntajes = store.pollOneScores;
               }}>Salir de noche a tomar un café frío y conversar de comics fantásticos</button>
            <button className='filter-btn' onClick={(e) => { store.pollTwo(5);
            this.vecinos = store.pollTwoN; this.puntajes = store.pollTwoScores;}}>Ir a un museo local para ver una exposición sobre estilo gráfico</button>
            <button className='filter-btn' onClick={(e) => { store.pollThree(5);
            this.vecinos = store.pollThreeN; this.puntajes = store.pollThreeScores;}}>Ver una película independiente dada la importancia que tiene sobre el tema de una producción</button>
            <button className='filter-btn' onClick={(e) => { store.pollFour(5);
            this.vecinos = store.pollFourN; this.puntajes = store.pollFourScores;}}>Tener una cita en restaurante japonés y conversas sobrre autores de novelas gráficas y artistas</button>
            </div>

            <FilterResult  neighs={this.vecinos} scores={this.puntajes}></FilterResult>
        </section>
        <section id='head'>
            <Header image={head3} title='conoce qué podrían hacer otras personas' 
            p='Selecciona más de 2 personas y mira lo que ellas podrían hacer cuando se trata de comics'
            color= '#000000' ></Header>
            <div className='people'>
                {
                    store.data.map( e => {
                        return <img className='arrayImg' src={require('../../components/GenViz/photos/' + e.foto)}></img>
                    })
                }
            </div>
            <div>
            <button onClick={(e) => {
             store.tempsquad = this.squad;
             store.squadPlan();
             this.squad = [];
         }}>
            Plan</button>
            </div>
           
           
        </section>
        <div>
        <h1>PLan recomendado</h1>
         <select onChange={this.handleSquad} >
            <option value=" ">none</option>
            {
                store.data.map( e => {
                    return <option value={e.nombre}>{e.nombre}</option> 
                })
            }
        </select>
        <select onChange={this.handleSquad} >
            <option value=" ">none</option>
            {
                store.data.map( e => {
                    return <option value={e.nombre}>{e.nombre}</option> 
                })
            }
        </select>
        <select onChange={this.handleSquad} >
            <option value=" ">none</option>
            {
                store.data.map( e => {
                    return <option value={e.nombre}>{e.nombre}</option> 
                })
            }
        </select>
        <select onChange={this.handleSquad} >
            <option value=" ">none</option>
            {
                store.data.map( e => {
                    return <option value={e.nombre}>{e.nombre}</option> 
                })
            }
        </select>

        
        </div>

        <div>

            <p>{store.finalplanOne}</p>
            <p>{store.finalplanTwo}</p>
            <p>{store.finalplanThree}</p>
        </div>
        </div>
         
        </div>
    }
}
export default Home;