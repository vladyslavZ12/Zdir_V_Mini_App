export default {
    
        props: ["car"],

        name: "TheCarCard",

        //data needs to be a function inside a component
        data: function(){
            return{
                myName: this.car.name,
                myRole: this.car.role,
                program: "FIP"
            }
        },

        template: 
        `<li @click="logClicked">
            <img :src="'images/' + car.thumbnail" alt="car image">
            </li>`,
        mounted: function() {
            console.log('loaded a car card');
        },

        methods: {
            logClicked() {
                console.log(`fired from inside ${this.car.name} the component`);
                this.$emit("showmydata", this.car);
            }
        }

        
        
}