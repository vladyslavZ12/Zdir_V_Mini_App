
import { fetchData } from './modules/DataMiner.js';
import CarCard from "./modules/TheCarCard.js";

(() => {
    let vue_vm = new Vue({
        data: {
            collection: [],
            currentCarData: {
            },
        }, 

        created: function(){
            console.log("Vue is mounted!");
            fetchData("./includes/index.php")
            .then(data => {
                data.forEach(car => this.collection.push(car));
                this.currentCarData = data[1];
            })
            .catch(err => console.error(err));
        },

        updated: function(){
            console.log("Vue just updated the DOM");
        },

        methods: {
            logClicked(){
                console.log("clicked on a carname");
            },
            clickHeader(){
                console.log("clicked on the header");
            },
            showCarData(target){
                console.log("clicked to view bio data about", target.video);
                this.currentCarData = target;

            },
        },

        components: {
            "car-card": CarCard
        }
        
    }).$mount("#app"); //also connects Vue to your wrapper in HTML 

})();