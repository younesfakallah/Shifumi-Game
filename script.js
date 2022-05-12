Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }

$('#refresh').hide();
$('#equality').hide();
$('#win').hide();
$('#loose').hide();

const calculPourcentage = (num) => {
    return (100/10)*num;
}

const workonDiv = () => {
    if(parseInt($('#computerpercent').text()) + parseInt($('#userpercent').text()) >= 100) {
        $('#computerscore').html('0');
        $('#userscore').html('0');
        if(parseInt($('#computerpercent').text()) > parseInt($('#userpercent').text())) {
            $('#loose').show();
            $('#equality').hide();
        } else {
            $('#win').show();
            $('#equality').hide();
        }
        $('#refresh').show();
    } else {
        let computerPer = calculPourcentage(parseInt($('#computerscore').text()));
        let userPer = calculPourcentage(parseInt($('#userscore').text()));
        $('#computerpercent').html(computerPer + '%');
        $('#userpercent').html(userPer + '%');
    }

}

$('#checkbtn').on('click', function() {
    $('#equality').hide();
    let iaResult = $('a').toArray().random();
    let userResult = window.location.href.slice(-7); 
    if(iaResult.id === 'ciseaux' && userResult === 'pierre') {
        let newuserScore = parseInt($('#userscore').text())
        $('#userscore').html(newuserScore += 1);     
    } else if(iaResult.id === 'pierre' && userResult === 'ciseaux') {
        let newiaScore = parseInt($('#computerscore').text())
        $('#computerscore').html(newiaScore += 1);
    } else if(iaResult.id === 'feuille' && userResult === 'pierre') {
        let newiaScore = parseInt($('#computerscore').text())
        $('#computerscore').html(newiaScore += 1);
    } else if(iaResult.id === 'pierre' && userResult === 'feuille') {
        let newuserScore = parseInt($('#userscore').text())
        $('#userscore').html(newuserScore += 1);
    } else if(iaResult.id === 'ciseaux' && userResult === 'feuille') {
        let newiaScore = parseInt($('#computerscore').text())
        $('#computerscore').html(newiaScore += 1);
    } else if(iaResult.id === 'feuille' && userResult === 'ciseaux') {
        let newuserScore = parseInt($('#userscore').text())
        $('#userscore').html(newuserScore += 1);
    } else if(iaResult.id === 'ciseaux' && userResult === 'pierre') {
        let newuserScore = parseInt($('#userscore').text())
        $('#userscore').html(newuserScore += 1);
    } else {
        $('#equality').slideDown();
    }
    
    workonDiv();
});
