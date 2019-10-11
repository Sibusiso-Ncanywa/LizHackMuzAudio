window.onload = function () {

    document.getElementById('About').style.display = 'none';
    document.getElementById('JamSessions').style.display = 'none';
    document.getElementById('MeetTheTeam').style.display = 'none';
    document.getElementById('JoinJamSession').style.display = 'none';
    document.getElementById('connectToUs').style.display = 'none';

    about.onclick = function () {
        document.getElementById('About').style.display = 'block';
        document.getElementById('HomePage').style.display = 'none';
        document.getElementById('JamSessions').style.display = 'none';
        document.getElementById('MeetTheTeam').style.display = 'none';
        document.getElementById('JoinJamSession').style.display = 'none';
        document.getElementById('connectToUs').style.display = 'none';
    };

    jSession.onclick= function(){
        document.getElementById('JamSessions').style.display = 'block';
        document.getElementById('MeetTheTeam').style.display = 'none';
        document.getElementById('JoinJamSession').style.display = 'none';
        document.getElementById('About').style.display = 'none';
        document.getElementById('HomePage').style.display = 'none';
        document.getElementById('connectToUs').style.display = 'none';
    };
    
    meetTeam.onclick = function(){
        document.getElementById('MeetTheTeam').style.display = 'block';
        document.getElementById('JoinJamSession').style.display = 'none'; 
        document.getElementById('About').style.display = 'none';
        document.getElementById('HomePage').style.display = 'none';
        document.getElementById('JamSessions').style.display = 'none';      
        document.getElementById('connectToUs').style.display = 'none';
    };
    
    joinJams.onclick = function(){
        document.getElementById('JoinJamSession').style.display = 'block';        
        document.getElementById('connectToUs').style.display = 'none';
        document.getElementById('About').style.display = 'none';
        document.getElementById('HomePage').style.display = 'none';
        document.getElementById('JamSessions').style.display = 'none';
        document.getElementById('MeetTheTeam').style.display = 'none';
    };

    connectUs.onclick = function(){
        document.getElementById('connectToUs').style.display = 'block';
        document.getElementById('About').style.display = 'none';
        document.getElementById('HomePage').style.display = 'none';
        document.getElementById('JamSessions').style.display = 'none';
        document.getElementById('MeetTheTeam').style.display = 'none';
        document.getElementById('JoinJamSession').style.display = 'none'; 
    };

    navBrand.onclick = goHome.onclick = function(){
        document.getElementById('HomePage').style.display = 'block';
        document.getElementById('About').style.display = 'none';
        document.getElementById('JamSessions').style.display = 'none';
        document.getElementById('MeetTheTeam').style.display = 'none';
        document.getElementById('JoinJamSession').style.display = 'none';       
        document.getElementById('connectToUs').style.display = 'none';
    };

};