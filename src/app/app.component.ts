import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  news=[];

  cols=[];
  constructor(){}
  search(query){
    if(!query){
      this.dataArray = [...this.dataArrayCopy];
    }else{
      let result = [];
      query = query.toString().toLowerCase();
        let arrayToReturn =   this.dataArrayCopy.filter(row=>{
        let columns = Object.keys(row);
            return (columns.map(column=>{
              return row[column]
            }).toString().toLowerCase().indexOf(query)) > -1;
      })
      console.log(arrayToReturn);
      this.dataArray = arrayToReturn;
    }
    
  }

  ngOnInit(){
    Object.keys(this.dataArray[0]).map(prop=>{
        let y = {name:prop};
        this.cols = [...this.cols,y];
    });
    this.dataArrayCopy = [...this.dataArray];
  }
  dataArrayCopy=[];
  capitalizeHeaders:boolean;
  appendUnderScoreToHeader:boolean;
selectedData(data){
  console.log(data,"af");
}
  options = {fileName:'Jeelani', delimiter:",",capitalizeHeaders:true,appendUnderScoreToHeader:true,changePropToName:true};
  dataArray = [
    {
        "userId": 256,
        "id": 1,
        "title": "delectus",
        "completed": false
    },
    {
        "userId": 89,
        "id": 2,
        "title": "quis ut",
        "completed": false
    },
    {
        "userId": 64,
        "id": 3,
        "title": "fugiat",
        "completed": false
    },
    {
        "userId": 23,
        "id": 4,
        "title": "tempora",
        "completed": true
    },
    {
        "userId": 100,
        "id": 5,
        "title": "laboriosam",
        "completed": false
    },
    {
        "userId": 999,
        "id": 6,
        "title": "ratione ",
        "completed": false
    },
    {
        "userId": 210,
        "id": 7,
        "title": "expedita",
        "completed": false
    },
    {
        "userId": 654,
        "id": 8,
        "title": "adipisci",
        "completed": true
    },
    {
      "userId": 24,
      "id": 9,
      "title": "tempora1",
      "completed": true
  },
  {
      "userId": 98,
      "id": 10,
      "title": "laboriosam1",
      "completed": false
  },
  {
      "userId": 329,
      "id": 11,
      "title": "ratione1",
      "completed": false
  },
  {
      "userId": 247,
      "id": 12,
      "title": "expedita1",
      "completed": false
  },
  {
      "userId":30,
      "id": 13,
      "title": "adipisci1",
      "completed": true
  }
];

x = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
  
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
     
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
     
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "phone": "(254)954-1289",
      "website": "demarco.info",
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",

      "phone": "210.067.6132",
      "website": "elvis.io",

    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",

      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",

    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "phone": "024-648-3804",
      "website": "ambrose.net",
    }
  ]
}
