class CcVehicle extends HTMLElement {
    constructor() {
        super();
        console.log('cc-vehicle constructor');
    }

    start() {
        console.log('starting');
    }

    stop() {
        console.log('stopping');
    }
} // end class

window.customElements.define('cc-vehicle', CcVehicle);

class CcPlane extends CcVehicle {

    constructor() {
        super();
    }

    contactTower() {
        console.log("Rennes Tours, ici Cessna 152");
    }
}

window.customElements.define('cc-plane', CcPlane);