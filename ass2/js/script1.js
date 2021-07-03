$(document).ready(function(){
    $('#nav_bar').addClass('sticky');

    $('.typewriter-text').each(function(i, obj) {
        var str1 = String(i*2.25);
        var str2 = "s";
        var j = str1.concat(str2);
        $(obj).css("animation-delay", j);
    });

    $('.animals').click(function() {
        if($(this)[0].getAttribute('src') == '../img/tiger.png'){
            $(this).attr('src', '../img/bison.png');
            $(this).attr('alt', 'Bison');
        } else if($(this)[0].getAttribute('src') == '../img/bison.png'){
            $(this).attr('src', '../img/jackal.png');
            $(this).attr('alt', 'Jackal');
        } else if($(this)[0].getAttribute('src') == '../img/jackal.png'){
            $(this).attr('src', '../img/lizard.png');
            $(this).attr('alt', 'Monitor Lizard');
        } else if($(this)[0].getAttribute('src') == '../img/lizard.png'){
            $(this).attr('src', '../img/sambar.png');
            $(this).attr('alt', 'Saambar Deer');
        } else if($(this)[0].getAttribute('src') == '../img/sambar.png'){
            $(this).attr('src', '../img/tiger.png');
            $(this).attr('alt', 'Tiger');
        } 
    });

    $('#nav_bar a').not('#current_page').on({
        mouseenter: function() {
            $(this).css('background-color', 'rgb(52, 53, 47)');
        },
        mouseleave: function() {
            $(this).css('background-color', '#2c2c2c');
        }
    });
});


var data_array = {};
var curr_ind = 0;

function enter_data() {
    var guy_name = document.getElementById('e_name').value;
    if(guy_name != "") {
        var skl = document.getElementById('my_skill').value;
        var proficiency = document.getElementById('prof').value;
        data_array[curr_ind] = [guy_name, skl, proficiency];
        // document.write(data_array);
        var my_skill_table = document.getElementsByTagName('table')[0];
        my_skill_table.innerHTML += "<tr'><td class='text-center'>" + data_array[curr_ind][0] + "</td><td class='text-center'>" + data_array[curr_ind][1] + "</td><td class='text-center'>" + data_array[curr_ind][2] + "</td></tr>"; 
        curr_ind++;
    } else {
        alert("You did not enter your name")
    }
}
