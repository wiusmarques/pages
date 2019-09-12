

(function () {
    
    init = function () {
        this.tabActions();
    },

        tabActions = function () {
            this.addTabEvents();
        },

        addTabEvents = function () {
            buttonsMoreInformation = document.getElementsByClassName("btn-more-information");

            for (let el of buttonsMoreInformation) {
                el.addEventListener("click", function () {
                    let elHash = el.outerHTML.hashCode();
                    enableTab(elHash);
                })
            }

        }

    enableTab = function (elHash) {
        let buttonsMoreInformation = document.getElementsByClassName("btn-more-information");

        for (let el of buttonsMoreInformation) {
            currentHash = el.outerHTML.hashCode();
            currentDataActive = el.getAttribute("data-tab-active");

            if (currentHash == elHash) {
                el.classList.add("section-more-tab_active");
                let information = document.querySelector("[data-information-active='" + currentDataActive + "']");
                information.classList.add("visibility-visible");
                information.classList.remove("visibility-hidden");
            } else {
                el.classList.remove("section-more-tab_active")
                let information = document.querySelector("[data-information-active='" + currentDataActive + "']");
                information.classList.add("visibility-hidden");
                information.classList.remove("visibility-visible");
            }
        }
    }


    

    this.init();
}())

String.prototype.hashCode = function () {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}


