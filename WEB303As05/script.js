/*
    Assignment 05
    Moksha Patel
*/

$(document).ready(function () {
    // your code here
    class ContentItem{
        Id;
        Name;
        Description;
        Category;
    
    constructor(Id, Name, Description, Category){
            this.Id = Id;
            this.Name = Name;
            this.Description = Description;
            this.Category = Category;
            }
    
    updateContentItem(Id, Name, Description, Category){
            if(this.Id == Id && Name && Description && Category){
                this.Id = Id;
                this.Name = Name;
             this.Description = Description;
                this.Category = Category;
                }
            }
            toString(){
            return $('#content-item-list').append(`<div class="content-item-wrapper">
            <div id="content-item-${this.Id}">
            <h2 class="Name">${this.Name}</h2>
            <p class="Description">${this.Description}</p>
            <div class="Category">${this.Category}</div>
            </div>
             </div>`);
                }
        }

        
        let content = [
        {
            "Id": 0,
            "Name": "Warm-golden candle",
            "Description": "Long-burning, clean candlelight.",
            "Category": "Beeswax Candle"
        },

        {
            "Id": 1,
            "Name": "Signature crackling candle",
            "Description": "Candlelight accompanied by subtle sound.",
            "Category": "Wood Wick Candle"
        },

        {
            "Id": 2,
            "Name": "Fluorescent glow candle",
            "Description": "Clean-burning, natural light.",
            "Category": "Soy Candle"
        },

         {
            "Id": 3,
            "Name": "Birthday party candle",
            "Description": "Fourth-of-June, birthday and holiday celebrations.",
            "Category": "Sparklers"
        },

        {
            "Id": 4,
            "Name": "Surprise candle",
            "Description": "Birthday, anniversary celebrations.",
            "Category": "Trick Candle"
        }

        ];

        $.each(content, function(key, val){
          $('#content-item-list').append(`<div class="content-item-wrapper">
         <div id="content-item-${this.Id}">
         <h2 class="Name">${this.Name}</h2>
         <p class="Description">${this.Description}</p>
         <div class="Category">${this.Category}</div>
        </div>
        </div>`);

        });
       $('h3').empty().text("About Candles");
       $('.content-item-wrapper').css({"border": "2px solid black", "width": "413px", "padding": "15px", "margin": "10px auto"});
});


