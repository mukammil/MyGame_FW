/*
* Need To Implement Pause & Resume  - Completed
		- On Resume need to find the exact time to finish the animation
* UI For
		- Powers
		- Stats
		- Choppers
		- Bombs
		- Blast.gif
		- PowerCapturing.gif
		- Icons For Extensions{In 3 sizes}
* Embed The GAME Into LayOut
* Generate manifest.json
* Themes
* HighScores
		- Cookie || WebStorage
		- Binary Search For Updating HighScore
* Game Description
* Controls || How To Play
* Advanced
		- Reply
		- Audio
		- More Smooth Movement
		- Get Themes From Users
		- Use The Existing Code To Create 
				# Bow & Arrow Type Game
				# Catch The Eggs Or Move The Eggs Game
* Create FrameWork
		- Get the directions[Object for animation]
		- Css classes
		- Height&Width
		- Properties for Collision method
		- Background
		- Onclick of object
		- Hot Keys 
*/


$(function(){
	var people, possibility = 0.02, speed = 2000,
		width = 600, height = 400,
		phase = 700, maxhits = 1, numPeople = 0,
		smTimer, lgTimer;
		paused = false;
	$.getJSON("people.json", function( json ) {
		people = [
{"name":"Andrew Kolesnikov","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Heather Corey","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"eddie cianci","src":"http://api.ning.com:80/files/o0kCUaTKWSNzn9RzpH4ZJJJFesVRg3uvshmIYK8GY017ARhmVVDNpE3MasapgODHWQGzI-YRwxAta3fEZjGYN2FAbSR67OJ5/9c1092a3b06fa0dd8454726c54ca4e7b.jpeg?width=118&height=118&crop=1%3A1"},
{"name":"Thomas Hazel","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Giris S","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Ryan Westphal","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Nick Cammarata","src":"http://api.ning.com:80/files/ilOdFYjKKVk4D2Hl*fzZnMl-Uq9N2gHuC55RCLJjHibwEXMutj2dRydujxlFsgDNS0Y9-ULJO9D49QDqnd*LzzM2nS7w9dcF/nic.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Natasha Makowski","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Elliot Glist","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Michelle Fullwood","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Sam Clearman","src":"http://api.ning.com:80/files/Rpb-0M43TZxWFRd4JV*cMuu1TGp6PO4lf**BldE5QGtTkWzElyWoB3QnxVJHrAECAkFukSqN3rzImss7lhBATc4yMEyQyGgC/samclearman.jpeg?width=118&height=118&crop=1%3A1"},
{"name":"Peter Martin","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Jean Bredeche","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Eliot Johnston","src":"http://api.ning.com:80/files/Q7DilA4BsqKrExXkgwVrgib-k*vhGzxQjn-AmjWMahnowSDlepGZ0jwk6HSqFq0Tv1mcQajmfLxTUemVHh5rjKRwz6mtNXPt/surprise.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Adam Rivard","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Jollson Sam Varghese","src":"http://api.ning.com:80/files/OKfRuOEvRFco9YphpBN9wLkXPzlIE867GS-qy1Xdt4W*KXFywfi-zoEl5Jj0MCLAwDdZL5L*szAJjOf1-PzEj5JCj6YHNic1/mejs.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Michael Alberghene","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Linh Tran","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Paul Shinn","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Praveen","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Praveen","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Austin J Alexander","src":"http://api.ning.com:80/files/ze6meJmvgynZUbKyHVK9jPdsFIzSpdQM2XjvgZRuz*PnSkocRfrfKy9anfbJQptVGUHFJn29Umu-lKk8jj15KU9juvQ2lv2t/gE63RW.jpeg?width=118&height=118&crop=1%3A1"},
{"name":"Joe Morgan","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Sherri Alexander","src":"http://api.ning.com:80/files/8BTSLNJBkRkRKYMRicf0SNQ0k4yGIn*qgtTAXT1oCekQ6Ph80Um0*YR66rrjSRQlhhOhReOm-iVWZsg8d7sc*UTX6MR4hRA8/IMG_0302.JPG?width=118&height=118&crop=1%3A1"},
{"name":"Raed","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Jay FlexRich","src":"http://api.ning.com:80/files/oMHNlTnb0oCR3gS59erjOxCaTTEe4f0a*k7xLUVEtK9SiEyZZfdEzFXMz9CajhqxwAmL7LciUmviBsgxSNnWZOsrIoLWFbbk/Penguins.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Stevie Black","src":"http://api.ning.com:80/files/f2GaVSY*5utOBOTmlarq9TDe8UAoNDS5*oCH5CphnQshMgD57l1ogeIG4EVsuLHwRRWn0r5mbOKincXPWtzZFspDgl*m4HtS/957278221.bin?width=118&height=118&crop=1%3A1"},
{"name":"Jason C","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Elan Noy","src":"http://api.ning.com:80/files/GjwzPWKCob4EBQ6g1RLpOIF-TnK5iajYxkpoADRa5pwgwvzJIDi4appqwMWlMj5KP3dA*efOJ3hDcbSTVE21toB14lqqzaax/ribncut.jpg?width=118&height=118&crop=1%3A1"},
{"name":"NENM","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Randy Cole","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Rachel Fink","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Kevin Flavin","src":"http://api.ning.com:80/files/GsxufMzDuLuYca97qpdLg3*0*rd4tvta0k6qSXDFMjVQTYpnumZBxhK6GEXMyuH9IsIxzQxYNWYgTNkoVXt2MlQ4bE*ETzjP/Snapshot_20090305.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Dennis","src":"http://api.ning.com:80/files/BNbSvXMqTYG9viShvwSO-NChKiGncai*HHtAAUOJm-Mq0NATRy2qJO7NhsL7-Hiu*eUSYAqXwRU-TQz0i39K9UWkMuvY6VJb/806234652.bin?width=118&height=118&crop=1%3A1"},
{"name":"Jen Strickland","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Micah Mutrux","src":"http://api.ning.com:80/files/j0SzQZGs3ac1I8IvTzrUQAhj4Xbz1T9U6uBYtHN*OtOVJhFWQcfUA4EgJ44Z0l1ur8F-ylB0jsaW7KVf-mpkQdaDRJtI14lN/headshot_tight.png?width=118&height=118&crop=1%3A1"},
{"name":"Owen Byrne","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Johnny Peck","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Michael Berger","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Mike Breen","src":"http://api.ning.com:80/files/vidpd0pFwmmjDbX83PJSuH5ED**id76Ied9Vwv3KEmNti6jdWuxCI8-4V*H362Kv4iwxwOIzLgaKAqYfAh1jOIQUtAOIQkEU/mikebreen_preferred.png?width=118&height=118&crop=1%3A1"},
{"name":"Henry Q. Dineen","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Jesse Weisbeck","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"PK Shiu","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Kevin Menard","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Hilary Couture","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Jim R. Wilson","src":"http://api.ning.com:80/files/62VDDaW-wT4kDIOpacYIjKD55a8adK30q6oIfUSKR4lWRW3N194eg4VuC4v59*M-6ugh7Osb4ziVUhTBiZNfx8PU4GC3kZCf/940409717.bin?width=118&height=118&crop=1%3A1"},
{"name":"Ruthie BenDor","src":"http://api.ning.com:80/files/Qj0QAzw4W57if3fpY9WG3Samf5roAUD0U33ieTyYE5McP2YHdYd9dce5i8KXAg*quJE7yapmRD1TbaApo2os7gkfvrUDPwVa/headshot100x100color.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Antonio Lettieri","src":"http://api.ning.com:80/files/xi9hVic0mUPY1qm0NQz-NujuRU90x4JCCoVs664lJXv-EbmvG0D8vVHq2ZTlHJz6aiilUcwzxlkBTcNJSWA6*Zn1ba*KFwRa/headshot.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Zafar Baig","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Eric Hynds","src":"http://api.ning.com:80/files/p8bcSSvlXVjG2l05fgQcQdDoAKjsIlEnWXAh094rBclheyrDgdwow8tX3IjbEHz52rwlMSCjSSSSmCnZKB3Y8LqqLEurdFZe/meface.png?width=118&height=118&crop=1%3A1"},
{"name":"Ben Anderson","src":"http://api.ning.com:80/files/LbvAV9uzOEaUzGVJAlKn3jEDyOjc3TPPAMVNjy*kz*vPWxWPcF4No6ioj*Wmzu1AVBW3hMD5WyGsbTC5YSpJUDDPGfhP*QM7/BenAnderson.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Andy","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Rebecca Halla","src":"http://api.ning.com:80/files/HonqPcqknMQDGxZxiiEydiXio0DXKMhV-BOpDkFANXGFKzmIG8MOahTe8l2IbsbEHl96cwLu8F6guhseQLBR1Xn7bId7DgvL/rebtwitter2.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Abhishek Gupta","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Chris Pels","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Rob Larsen","src":"http://api.ning.com:80/files/*S5P3pwdwJAC01WDueCXtt1V-ziTbyq2dWsTSMn9INLdyGb-2ZDNjrtrGkIg64B5aKpuhe7H3aoqHkapCsS-Cw52*liO1bdp/19856_249114016375_521736375_3446856_6552242_n.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Beardsley Ruml","src":"http://api.ning.com:80/files/K8F8rIOl5FsvTCcopqipQYYKL60DDzKV6SAFQfixzv-CPhaEXoizrYmz7*2pdTFQWPZaeX41qQtxNv5VjnnwYdflQFDC4fpP/SelfAmsterdam.JPG?width=118&height=118&crop=1%3A1"},
{"name":"Charles Magid","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Wyatt Greene","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Manuel A. Centeio","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Josh Rosenthal","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Mike O'Hara","src":"http://api.ning.com:80/files/qUe*pdTMdJKRTgTkmmnEh1pFSDpkDFJN*ElCTsrvvUMKisEgo2ptKcewYmHZfHdZLJvCEWlfvufPlh5CW7lnAmSIlvTtSn8f/822767530.bin?width=118&height=118&crop=1%3A1"},
{"name":"chris varenhorst","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Kris Walker","src":"http://api.ning.com:80/files/n4Wdlt6CvoRxxwzKgl-JfTax*Vqk3C10YZtUxxDCvYZ-4eicjvxVvTauyJcOcSZcHix4AXMZ6ggNNGX2Q3Y*Sc1C4e6xti0l/sparkwhite.png?width=118&height=118&crop=1%3A1"},
{"name":"Lee Stewart","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Nick Plante","src":"http://api.ning.com:80/files/b8dRnxR*6dVS84Uhb0Am0Pv6H9NJjNGFBxwpC*F1*vLoESAY2qzOXMu-yDzHJVKmXZRL2DQtfkYX00dD0vaTJ57S4WO0vr-g/822443548.bin?width=118&height=118&crop=1%3A1"},
{"name":"Ed Lyons","src":"http://api.ning.com:80/files/FWXYO1Xb4fF1KXBCDkPfzvnbtWZmJ-K*57e3e0Mf0CLRCsn4Mx8gBk6fl0VREuPFxndhSMjrf*iK3Gk6xxYj7JxiAdHc2kYa/ed_head_1230_small.jpg?width=118&height=118&crop=1%3A1"},
{"name":"David Most","src":"http://api.ning.com:80/files/*HUHoHujNN5v1-Gx0*xKLiTf8IaWZRnlD79NxAmRmTFKqkZr71d-9XXPtnlDrdRejlqpvwcFIj-ErhLP7h-KwzHSaayuzwUO/IMG_0060.JPG?width=118&height=118&crop=1%3A1"},
{"name":"Nate Prouty","src":"http://api.ning.com:80/files/X53vZ5NE364IFFB0BBE4sC75-*Kp*nWKjxn1WfYa1ZjqBEh1vH3WEetnfFu0dgX2Nd*fAi4PMQ9S8DJET2Zf*KzByM5gbtsy/Photo127.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Gregory Cornelius","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Tony Wieczorek","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Goss Nuzzo-Jones","src":"http://api.ning.com:80/files/P9Qw0ksZC8MMXZRc92M4h4kstfQ4UCjEgnU7dhZGeHLs23fqRAGyKyf-vtFGGv4oUad6*5cigmL6QqWsi3jkhisCr6NkZzNX/855875117.bin?width=118&height=118&crop=1%3A1"},
{"name":"Kevin H","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Joseph Connolly","src":"http://api.ning.com:80/files/*KVm71tDl-dObkO1LIURsU2cIZbVMA3eWoR38vmUduo7QrcVvC6FVb2Ys*84pbMiDuXhhID4PSfalmQvrm1OU1RNcWVBU2SF/1004081909.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Michelle Semler","src":"http://api.ning.com:80/files/cgh3wfl3j7yU1fSWJ1hmKuax9a1ME4dBxm3*G*YRWfc0ySRFkBzzZIjuo4Derj4-8Ozc747ULceuIpwfYrC*J6*0MdikfHGw/805504048.bin?width=118&height=118&crop=1%3A1"},
{"name":"Michael Quimby","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Michelle Callahan","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Spencer Sanchez","src":"http://api.ning.com:80/files/9zoMnCLe4IwxsJ0XCheSyIP6N2i2qLoeSVybxLyGOVF7MHeeUykwWm2UYA*IF9ofwnmSvdBnjlaIGXnoerfoJl6Nu8ygDJrI/soxface.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Chris Lees","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Ryan Leach","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Wendee Fiorillo","src":"http://api.ning.com:80/files/rxCSjMLmhyHLU0hkwBvnOXJ8DqpqiryJtGSUqVZpWYtK45M-5YFmEi8QSiDMfceGIjrOow*2VFMOqgRRn-s8F0XnLyDiEJwX/cheeky2.gif?width=118&height=118&crop=1%3A1"},
{"name":"Matthew Simoneau","src":"http://api.ning.com:80/files/eXi*nvXCkgFEG8NtmuBVleIDiILemFORElBtxdIOc6VsuMhYAc29vbmGWlcxaXFP8O7A8BzAcI6*m4Ku9ysZH*dknOICYwBM/glasses_square.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Kyle Bradshaw","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"grant halsey","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Dave Arel","src":"http://api.ning.com:80/files/aj8I9nQitOeyUp0WaaoMGv4JIlQgnFIN6eu4Lq-f0w0c8DS-7fcCyas5bI9*Mefl751zKWVW4pp22V-SC2ybk*lIRkjQRmez/4820_92850768028_524023028_2020375_2301755_n.jpg?width=118&height=118&crop=1%3A1"},
{"name":"KAdam White","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"David Miranda","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Mark Ursino","src":"http://api.ning.com:80/files/MUhA*WUTPFytTEnqaEpoUNkIg7jzmlFvgeq5GatjVshw1GSa9Ou6eQh6t*Fq4zitVAXBFMdI7HHaNlKAdsZR8qg7k3b38snV/367b919.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Jared Williams","src":"http://api.ning.com:80/files/lLNRAldLcl9GGcMB4tJ2moidtmbkSS5bWH-hT4-2HsE2uL4WUF9glds*6s1qgxhxO8qOOL-7uIoFrTIrvTzksP5F-kj0ekLo/jaredn.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Andrew Drane","src":"http://api.ning.com:80/files/R9roduddvS3cSDsFvKldCSsQNVu59pNW-Jn0y0qNHly3rJ68ejT4m5Fg3vv3WnYKfOCBtlKSlTfmU1VfIqF2eeXpP83Tj7i2/profile.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Jay Fallon","src":"http://api.ning.com:80/files/R9roduddvS1-QMJb5crmzrjtNxFsbbGrPEVEG0Q7erdk2pgdZN7A7KCpUn7H*eoBpeiyhCXcLdykxE4RZ3UKmkGhkd7UFkZ3/IMG_2609port.JPG?width=118&height=118&crop=1%3A1"},
{"name":"Darrin McCarthy","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Jon Shea","src":"http://api.ning.com:80/files /1zCTvV*3i2A5gzJvqk9CLY4eSnP3xxBOvYaLQKajuBG69aSCVDDEpLhhOCpzckkQm*zy74AXJQ2SIwZn*8oUzQ1ig16O8TGe /Photo14.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Mable","src":"http://api.ning.com:80/files /KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388 /639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"mitcho /??","src":"http://api.ning.com:80/files /xTjkQ7tQoVe9iFPzbe2CyBsoPtWMyE5HlSrnYzHsQLVb*7g8ewLQ*eAJB1vTrZIjOvvQ8qjpOyDDcJ9tAghX1tn7m73VM-WA/mitchosquaremed.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Bob Holt","src":"http://api.ning.com:80/files/w1RSgc4vF*9X5jaR2YSSGRqGR4YvroZAfaZH-J-KuMkRBstItbw-yaMrPecVIupMVOx9Loa0SMVRC55GkgshBkM-ksBk*i6e/avatar_472_472.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Brian Del Vecchio","src":"http://api.ning.com:80/files/xTjkQ7tQoVcx2EsTTSAbYJ08drkLbyhG3Zosi5Ki54fqGolKYmpNzHQmtCjrSVyT0uOc-WM9PPZlwrOZbVJv3nV2gOz1dwB9/bdvsummer200.png?width=118&height=118&crop=1%3A1"},
{"name":"Robert Hall","src":"http://api.ning.com:80/files/0vlJjaBPM2ZRygIeI*u8gQVP3Q6QYJmhSej*SClfzGAzJY0QvtJ6VkeebnXPdPGyR381EDs2ScDabbCka4tnlY-IREre0oEn/me_fohawk.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Brian Crescimanno","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Michael Macasek","src":"http://api.ning.com:80/files/rxCSjMLmhyE9WNDXB7ettUrI3wJI0Z9N*iQSemZWBCen*bi5-fLpHxXQz*8NHYSjcFGFThHttv38ANjQCK-pqpieekGx8ynr/small.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Mike Champion","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"F1LT3R","src":"http://api.ning.com:80/files/6Z2G-v3lS5bkuHbAN6Av*0I4giMhP*hitFCBvXPBAvMSoDy4T7rzTCaRbArZRzHa2CgSZqEWFgqebr266fK5Fw8R1sfMpN1g/me_bigger.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Boaz Sender","src":"http://api.ning.com:80/files/PUGKlAj8**BB7ftjX0qUbaXulYSvauDZ3gThZzi54o*iB1aSmzbbLBy1ITZlo51XkB*s9h*O-NtZSx*C5Ds3c9-cZ6U0Yemf/Recen.jpeg?width=118&height=118&crop=1%3A1"},
{"name":"Paul Irish","src":"http://api.ning.com:80/files/rH1ivKIiga82p3IqUarOhqyffWsuASwK-VH581HD9ip-xlXUfwtg6HuSqvNjw1oGiFN56uQsRAbOyMyVCHGYst0yLUhymB3g/greenavatar_crop.jpg?width=118&height=118&crop=1%3A1"},
{"name":"figital","src":"http://api.ning.com:80/files/OTrR5SPkM1lmBxh4C4grhHpHcV7aWm6-W9Ny2HpUoF1d*CIcse2jF9or33ogAdBehwpWVLzKOgqin*NfVRO7E*wog6nkZ0X1/990017636.bin?width=118&height=118&crop=1%3A1"},
{"name":"John Resig","src":"http://api.ning.com:80/files/T6PMbGSEEoChCVMkFR3Ul9bTQMSZqlidMx03a4*FDTOh*OXH9TqsQMv664h7JaHrTug6mUeKURSoqArtVkk4hY9zsENottnN/3450728563_69b0bd0743_bigger.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Claire Martinez","src":"http://api.ning.com:80/files/KFPqOFU9*ezor0WdCmZASQMlBO4dZoRjANnWhwEogMUCuV5UiLGtNxdpH3Ul2XrYG69vMlyUo1wbUtAiiC03-9we5Vsyg388/639505521.png?width=118&height=118&crop=1%3A1"},
{"name":"Winfield","src":"http://api.ning.com:80/files/YsuJwodfPy9vfSrgUKkiaZGlvKNPbgnIsEHrvhOWoDtm8HlfCZMIbOMIz3chH1gpy4GaQq4d-RE1Nirh3TM-BOV1kq8xHZ2i/facewellesley.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Tim Branyen","src":"http://api.ning.com:80/files/NNRm0r7VGyxZYWQqn793AijWtVToRoFivy4GW4kQLXoPwOQ7y-Ua8cjMSzyc9HBgB8G5DWyhOrKZ8IzBN6dKxfH0Ym2T8fCn/n24408698_31303896_8193.jpg?width=118&height=118&crop=1%3A1"},
{"name":"Ben Alman","src":"http://api.ning.com:80/files/f5fRcPHqkK61fChOeiA5386s1IBmzWH2Kz*6NMF8efdAwlf*AoEe8Vd6iNFBwDMY74jWKjJd*PaxPB7OefjV*HC981*2QoNM/headshot_kangol.jpg?width=118&height=118&crop=1%3A1"}
];
	});
	/*Once after Modifying the addUser method;
	  We can remove getJson of people.json;
	*/
	function addUser( person, size ) {
		if(!paused){
		var diff = (Math.random() * 100), d = size === "lg" ? 150 : 20;
		//size === "lg" ? speed * 2 : speed + ((diff / 600) * speed),
		jQuery("<div class='user'><img/></div>")
			.find("img").attr( "src", "enemy_small_2.png" ).end()
			.addClass( size )
			.appendTo("#game")
			.css({ "top": ((height - d) * Math.random()), "left": width + diff })
			.data({ "hits": 0, "maxhits": size === "lg" ? maxhits * 5 : maxhits, user: person.name })
			.animate({left:-32*d},{duration: 5000,
				step:function(now,fx){
						$(this).trigger("collision");
				}
				});
		numPeople++;
		if ( numPeople % 20 === 0 ) {
			possibility += 0.005;
			if ( possibility >= 0.1 ) {
				possibility = 0.1;
			}
			speed -= 200;
			if ( speed < 5000 ) {
				speed = 5000;
			}
		}
		}
	}
	$("#game").bind("start", function(){
	
	/*This is where the game starts;
	Need to Call or Change the addUser method;
	In this right now using people.json;
	Use Random function to set the position of enemy aswellas Type of Enemy;
	Type of Enemy will be decided in this Method & send it to addUser method.
	This is for small Users - bombers /double bombers /speedup / slowdown;
	i.e either an enemy or a power{Based on stats};
	I think One Parameter is Enough i.e class to be added to the W.S
	*/
		possibility = 0.02;
		speed = 10000;
		smTimer = setInterval(function(){
			for ( var i = 0; i < 2 ;i++ ) {
				if ( Math.random() < possibility ) {
					addUser( people[i], "small" );
				}
			}
		}, phase); 
		
		lgTimer = setInterval(function(){
			addUser( people[ Math.round(Math.random() * people.length) ], "large" );
		}, phase); //This is for Big Users		
		$(this).data("running", true);
		jQuery("<div id='flight'></div>")
			.appendTo("#game")
			.css({ "top": (height/2), "left":5 }); // Adding flight to the WS.
		moveBackground(); // Attach Custom Event And trigger it.
	});
	$("#game").bind("stop", function(){
		$(".user").stop().fadeOut( 500, function(){
			$(this).remove();	
		});
		$('#flight').stop().fadeOut( 500, function(){
			$(this).remove();
			$('#game').stop();
		});
		
		clearInterval( smTimer );
		clearInterval( lgTimer );
		$(this).data("running", false);
	})
	/* Use This method to define KeyBoard shortcuts
	$("#game").delegate(".user", "mousedown", function(){
		$(this).trigger("hit");
	});*/
	
	// Prevent selection
	$("#game").bind("mousedown", function(e){
		e.preventDefault();
	});
	
	// Prevent accidental selection
	$("#game").attr('unselectable', 'on').css('MozUserSelect', 'none');
});
function up(){
	if($("#flight").position().top > 25)
	$("#flight").animate({"top": "-=64px"}, 10);
}
function down(){
	if($("#game").height() - $("#flight").position().top > 89 )
		$("#flight").animate({"top": "+=64px"}, 10);
}
function left(){
	if($("#flight").position().left > 25)
	$("#flight").animate({"left": "-=64px"}, 10);
}
function right(){
		if($("#game").width() - $("#flight").position().left > 89 )
		$("#flight").animate({"left": "+=64px"}, 10);
}
function space(){
	var fPos = $("#flight").position();
	var left = 	fPos.left+64;
	var top = fPos.top+32;
	jQuery("<div id='bomb'></div>")
			.appendTo("#game")
			.css({ "top": top, "left":left }).animate({left:$("#game").width()+32},1000,function(){
					$(this).remove();
			});
}
function bomber(){
	var fPos = $("#flight").position();
	var left = 	fPos.left+64;
	var top = fPos.top+32;
	jQuery("<div id='bomb1'></div>")
			.appendTo("#game")
			.css({ "top": top, "left":left }).animate({left:$("#game").width()+32},1000,function(){
					$(this).remove();
			});
}
function pause(){
	if(!paused){
		paused = true;
		$(".user").stop();
		$("#game").stop();
	}else{
		paused = false;
		$(".user").each(function(){
			console.log($(this));
		$(this).animate({left:-32},{duration: 2000,
				step:function(now,fx){
						$(this).trigger("collision");
				}
		});
		});
	}
}
function moveBackground(){
	$('#game').css({
		backgroundPosition: "0px 0px"
	});
	$('#game').animate({
		backgroundPosition: '-700px'
	}, 10000, "linear", function(){
		moveBackground();
	});
}
