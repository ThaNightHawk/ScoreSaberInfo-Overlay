# Discontinued

Umbra made changes to the ScoreSaber API a long time ago, that stopped client-side requests to it, thus breaking the overlay.

# ScoreSaberInfo-Overlay

How to setup:
- Download the source
- Unpack into a folder of you choice
- Change the `userID` on `line 1` in `logic.js`
- Create browser-source in OBS that points to the index.html file

Done correctly, you should now see [this](https://i.imgur.com/apgxHDa.png) in OBS.

If you don't want to host it yourself, feel free to use the prehosted version: `https://api.hawk.quest/u/?u=76561198086326146`
Simply just change `76561198086326146` to your own ScoreSaber ID, and put that link into a browser-source in OBS.
