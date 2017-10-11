import {Character, Level} from './../js/rpg.js';

$(document).ready(function() {
  // build game board template display
  let board = "";
  let x = 0;
  for(let row = 0; row < 10; row++) {
    board += "<div class='row'>";
    for(let col = 0; col < 12; col++){
      board += `<div class='col-sm-1'><div class='sqr' id='${x}'></div></div>`;
      x += 1;
    }
    board += "</div>";
  }
  $("#game").append(board);
// #############################################################################

  // sumbit form to start game
  $("#create_character").submit(function(event){
    event.preventDefault();
    let array1 = [  ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
                    ["w"],["w"],["w"],["l"],["l"],["l"],["w"],["w"],["w"],["w"],["w"],["w"],
                    ["l"],["l"],["l"],["l"],["w"],["l"],["w"],["w"],["w"],["w"],["w"],["w"],
                    ["l"],["l"],["l"],["l"],["l"],["l"],["l"],["w"],["w"],["w"],["w"],["w"],
                    ["w"],["l"],["w"],["w"],["w"],["w"],["w"],["l"],["l"],["w"],["w"],["w"],
                    ["l"],["l"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
                    ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["l"],["w"],
                    ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
                    ["l"],["l"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],
                    ["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"],["w"]
                ];

    let type = $("#character_type").val();
    $("#create_character").hide();

    let player = new Character(type);
    let level1 = new Level(array1);

    $("#game").show();


    let current_level = level1

    for(let sqr = 0; sqr < 120; sqr++){
      if (current_level.grid[sqr][0] === "w"){
        $(`#${sqr}`).addClass("blue");
      }
      if (current_level.grid[sqr][0] === "l"){
        $(`#${sqr}`).addClass("green");
      }
    }
    // on click
    var last_id = player.position;
    $(`#${last_id}`).html("<img src='./warrior.png'>");
    $(".sqr").click(function(e){
      let current_id = parseInt($(e.currentTarget).attr('id'));

      if((current_level.grid[`${current_id}`][0] === "l") && (((last_id-1) === current_id) || ((last_id+1) === current_id) || ((last_id-12) === current_id)|| ((last_id+12) === current_id))){
        $(e.currentTarget).html("<img src='./warrior.png'>");
        $(`#${last_id}`).html("");
        last_id = current_id;
      }
    });
  });
});
