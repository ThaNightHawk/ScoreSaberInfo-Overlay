const userId = "76561198086326146";
fetch('https://new.scoresaber.com/api/player/'+userId+'/basic')
        .then(response => response.json())
        .then(data => {
            let playerId = data.playerInfo.playerId;
            let playerCountry = data.playerInfo.country;
            let playerGlobalRank = data.playerInfo.rank;
            let playerCountryRank = data.playerInfo.countryRank;
            let avatar = data.playerInfo.avatar;
            if (data.playerInfo.avatar == "/images/oculus.png") {
                document.getElementById("PlayerImage").src = "https://new.scoresaber.com/api/static/avatars/oculus.png";
            } else {
                document.getElementById("PlayerImage").src = "https://new.scoresaber.com" + avatar;
				
            }
			document.getElementById("PlayerFlag").src = "https://flagicons.lipis.dev/flags/4x3/" + playerCountry.toLowerCase() + ".svg";
            document.getElementById("PlayerName").innerText = data.playerInfo.playerName;
            document.getElementById("PlayerRank").innerText = '#' + data.playerInfo.rank + ' Global | #' + data.playerInfo.countryRank + ' ' + playerCountry;
            document.getElementById("PlayerPP").innerText = data.playerInfo.pp + 'PP';
            document.getElementById("PlayerContainer").style.opacity = "1";
        });