"use strict";

class Transfer {
    table = document.getElementById('table');
    agents =  [
        {
            "pic": "images/pic.png",
            "name": "Nika Gabunia",
            "status": "Online",
            "position": "Customer service",
            "serving": "Serving 2",
            "opacity": "95%",
            "color":  ""
        },

        {
            "pic": "images/pic.png",
            "name": "Giorgi Chaduneli",
            "status": "Offline",
            "position": "Sales",
            "serving": "Not serving",
            "opacity": "95%",
            "color":  ""
        },

        {
            "pic": "images/pic.png",
            "name": "Mariam Kartlelishvili",
            "status": "Online",
            "position": "HR department",
            "serving": "Serving 2",
            "opacity": "95%",
            "color":  ""
        },

        {
            "pic": "images/pic.png",
            "name": "Giga Gotsiridze",
            "status": "Online",
            "position": "Customer service",
            "serving": "Serving 2",
            "opacity": "95%",
            "color":  ""
        },

        {
            "pic": "images/pic.png",
            "name": "Giga Gotsiridze",
            "status": "Online",
            "position": "Sales",
            "serving": "Serving 7",
            "opacity": "95%",
            "color":  ""
        }
    ];

    dynamicStyle() {
        let list =this.agents.filter(agent => {
          if(agent.status == "Offline") {
              agent.opacity="70%";
          }

          else {
              agent.color="#2ECA17"
          }
        });
    }
    
    getAgentsList(agentsArray = this.agents) {
        let allAgents = agentsArray.map(agent => `<tr class="tr" style="opacity:${agent.opacity}">
        <td class="pic">
            <img src="${agent.pic}" alt="pic">
        </td>
        <td class="name">
            ${agent.name}
        </td>
        <td class="active-status" style="color: ${agent.color}">
            ${agent.status}
        </td>
        <td class="position">
            ${agent.position}  
        </td>
        <td class="serving">
        <span class="serv">${agent.serving}</span>
            <div class="transfer-button">Transfer</div>
        </td>
    </tr>`);

    this.table.innerHTML = allAgents.join("");
    }

    searchAgents(bar) {
        let form = document.querySelector("#form");
		form.addEventListener("submit", (e)=>e.preventDefault());
        bar.addEventListener("input", ()=> {
                let userInput = bar.value.toLocaleLowerCase();
                let foundAgents = this.agents.filter(agent => {
                    if (userInput.length < 1) return false;
                    else if (userInput.length >= 3 && agent.name.toLocaleLowerCase().includes(userInput)) return true;
                     else return false;
                });
                if(foundAgents.length>0) {
                    this.getAgentsList(foundAgents);
                }

                else if(userInput.length == 0) {
                    this.getAgentsList(this.agents);
                }
        })
    }
}

let transfer = new Transfer();
const searchBar = document.getElementById("search");
transfer.dynamicStyle();
transfer.getAgentsList();
transfer.searchAgents(searchBar);


