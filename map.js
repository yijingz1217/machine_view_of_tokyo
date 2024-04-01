var mapconsoleID = document.getElementById("mapconsole");
var mapID = document.getElementById("map");
var controlCenterID = document.getElementById("controlCenter");
var sizebuttonID = document.getElementById("sizebutton");
var largerID = document.getElementById("larger");
var smallerID = document.getElementById("smaller");
var upID = document.getElementById("up");
var downID = document.getElementById("down");
var leftID = document.getElementById("left");
var rightID = document.getElementById("right");
var searchCenterID = document.getElementById("searchCenter");
var searchboxID = document.getElementById("searchbox");
var popID = document.getElementById("pop");
var buttonID = document.getElementById("button");
var pinID = document.getElementById("pin");
var locID = document.getElementById("loc");
var closeID = document.getElementById("close");
var switchID = document.getElementById("switch");
var welcomeID = document.getElementById("welcome");
var shadeID = document.getElementById("shade");
var textID = document.getElementById("text");
var prefaceID = document.getElementById("preface");
var closeprefaceID = document.getElementById("closepreface");
var resultID = document.getElementById("result");
var closeresultID = document.getElementById("closeresult");
var prefacebuttonID = document.getElementById("prefacebutton");
var resultbuttonID = document.getElementById("resultbutton");
var window_h = window.innerHeight;
var window_w = window.innerWidth;

var original_h = 2466, original_w = 4758;
var cur_location, cur_location_i;

var mapArray = [
    {   filename: "map.gif",
        width: window_h / original_h * original_w,
        height: window_h,
    },

    {   filename: "map.gif",
        width: window_h / original_h * original_w * 1.4,
        height: window_h * 1.4,
    },

    {   filename: "map.gif",
        width: window_h / original_h * original_w * 1.8,
        height: window_h * 1.8,
    },

    {   filename: "map.gif",
        width: window_h / original_h * original_w * 2.2,
        height: window_h * 2.2,
    },

    {   filename: "map.gif",
        width: window_h / original_h * original_w * 2.6,
        height: window_h * 2.6,
    },

    {   filename: "map.gif",
        width: window_h / original_h * original_w * 3,
        height: window_h * 3,
    },
    
];

var locationArray = [
    {   name: "Ikebukuro",
        x: "1450",
        y: "258",
        reality: "Ikebukuro to me is the paradise of anime and the best place to hang out with friends. There locates the world’s largest anime goods shop, Animate, and also some second-hand anime goods shops, such as Kbooks and Surugaya. We like to shop there. There are also many street games stores, such as Gigo, there. We loved to enjoy claw machines there. I really enjoy the randomness of the games and the feeling of winning stuff on my own. "
        + "<br><img src = \"image/ikebukuro_real_1.png\" alt=\"Ikebukuro real image\" />"
        + "<img src = \"image/ikebukuro_real_2.png\" alt=\"Ikebukuro real image\" />"
        + "<br><img src = \"image/ikebukuro_real_6.png\" alt=\"Ikebukuro real image\" />"
        + "<img src = \"image/ikebukuro_real_7.png\" alt=\"Ikebukuro real image\" />"
        + "<br><br>"
        + "One important shopping mall located in Ikebukuro is the Sunshine City. I like the food there. There is one fantastic restaurant serving Omelet rice, called \“Tamago to Watashi\”. I also liked Wako’s Nabe Gohan, even though they sometimes go a bit too salty. I really enjoys shopping at Sunshine city, where shops favour more on people at my age. "
        + "<br><img src = \"image/ikebukuro_real_3.png\" alt=\"Ikebukuro real image\" />"
        + "<img src = \"image/ikebukuro_real_8.png\" alt=\"Ikebukuro real image\" />"
        + "<br><br>"
        + " Sunshine city also holds many anime events. My friends and I went to one anime exhibition \"Idolish Live Custom Exhibition\" here. It exhibits all customs dressed by voice actors during Idolish7 series of lives. It is really enjoyable to see stuffs that we like."
        + "<br><img src = \"image/ikebukuro_real_4.png\" alt=\"Ikebukuro real image\" />"
        + "<img src = \"image/ikebukuro_real_10.png\" alt=\"Ikebukuro real image\" />"
        + "<br><br>"
        + "Another thing about Ikebukuro to me is that it is not wallet friendly. The shops there are so amazing. Every time I went there, I tend to spend over 20,000 yen on shopping." 
        + "<br><img src = \"image/ikebukuro_real_9.png\" alt=\"Ikebukuro real image\" />"
        + "<img src = \"image/ikebukuro_real_5.png\" alt=\"Ikebukuro real image\" />"
        + "<br><br>"
        + "Just noticed that what I wrote is all about east Ikebukuro. Ikebukuro is divided into west Ikebukuro and east Ikebukuro by Ikebukuro Station. Even for times living in Tokyo and numerous trips to Ikebukuro, I realized that I seldom been to west Ikebukuro. I can remember every direction to go to the Animate store, but I can still get lost in west Ikebukuro. ",

        machine:  "Ikebukuro, nestled in the heart of Tokyo, pulsates with a vibrant energy that is uniquely its own. As one of the city's major commercial and entertainment hubs, Ikebukuro embodies a dynamic fusion of traditional Japanese culture and modern urban lifestyle. The space of Ikebukuro is characterized by its bustling streets, towering skyscrapers, and a kaleidoscope of neon lights that illuminate the night sky."
            + "<br><img src = \"image/ikebukuro_machine_1.png\" alt=\"ikebukuro machine image\" />"
            + "<br><br>"
            + "At the heart of Ikebukuro lies its iconic Sunshine City complex, a towering structure that houses an eclectic mix of shopping malls, restaurants, entertainment facilities, and even an indoor theme park. The sprawling complex serves as a beacon for visitors and locals alike, drawing them into its lively embrace. The space within Sunshine City is alive with the constant buzz of activity, as crowds of people weave through its maze-like corridors in search of excitement and adventure."
            + "<br><br>"
            + "Venturing beyond Sunshine City, the streets of Ikebukuro come alive with a symphony of sights, sounds, and smells. The area is home to an eclectic array of shops, ranging from trendy fashion boutiques and electronics stores to quaint traditional crafts shops and manga cafes. Narrow alleyways beckon curious explorers to uncover hidden gems tucked away amidst the urban sprawl, while vibrant street performers add an extra layer of excitement to the bustling atmosphere."
            + "<br><img src = \"image/ikebukuro_machine_2.png\" alt=\"Ikebukuro machine image\" />"
            + "<br><br>"
            + "Despite its bustling nature, Ikebukuro also offers pockets of tranquility amidst the chaos. Peaceful parks and gardens provide respite from the hustle and bustle of the city, inviting visitors to relax and recharge amidst lush greenery and serene ponds. These oases of calm serve as a reminder of the harmonious balance between nature and urban life that defines Tokyo as a whole.</h2>"
            + "<br><br>"
            + "In the evening, Ikebukuro transforms into a dazzling spectacle of lights and colors. Neon signs flicker to life, casting an enchanting glow over the streets below. The district's vibrant nightlife scene comes alive, with izakayas, karaoke bars, and nightclubs beckoning revelers to dance the night away. Yet amidst the excitement, there is an undeniable sense of warmth and camaraderie that permeates the air, as strangers come together to celebrate the magic of Tokyo's bustling metropolis."
            + "<br><img src = \"image/ikebukuro_machine_3.png\" alt=\"Ikebukuro machine image\" />"
            + "<br><br>"
            + "Overall, the space of Ikebukuro is a captivating blend of old and new, tradition and innovation. Its lively streets and eclectic atmosphere embody the spirit of Tokyo, offering a sensory feast for the adventurous soul. Whether exploring its bustling shopping districts, savoring its culinary delights, or simply soaking in its vibrant atmosphere, Ikebukuro never fails to leave a lasting impression on all who wander through its streets.",
    },

    {   name: "Shinjuku",
        x: "1292",
        y: "1022",
        reality: "test",
        machine: "Shinjuku, a bustling district in Tokyo, Japan, is a vibrant and dynamic space that encapsulates the essence of modern Japanese urban life. As one of Tokyo's major commercial and entertainment hubs, Shinjuku offers a kaleidoscope of experiences, from towering skyscrapers to narrow alleyways filled with izakayas (Japanese pubs) and bustling crowds of people."
            + "<br><img src = \"image/shinjuku_machine_1.png\" alt=\"Shinjuku machine image1\" />"
            + "<br><br>"
            + "At the heart of Shinjuku lies Shinjuku Station, one of the busiest transportation hubs in the world. The station is a sprawling complex that connects various train lines, including the JR Yamanote Line, making it a vital artery for commuters and travelers alike. The surrounding area is a maze of streets lined with department stores, restaurants, and neon-lit entertainment establishments, creating an electrifying atmosphere that never seems to sleep."
            + "<br><br>"
            + "One of the defining features of Shinjuku is its iconic skyline, dominated by towering skyscrapers that pierce the clouds. Buildings like the Tokyo Metropolitan Government Building and the Mode Gakuen Cocoon Tower stand as architectural marvels, offering panoramic views of the cityscape below. The juxtaposition of modernity and tradition is evident throughout Shinjuku, with gleaming high-rises coexisting alongside historic temples and shrines tucked away in quiet corners."
            + "<br><img src = \"image/shinjuku_machine_2.png\" alt=\"Shinjuku machine image2\" />"
            + "<br><br>"
            + "Exploring the streets of Shinjuku, one encounters a sensory overload of sights, sounds, and smells. Vendors selling street food tempt passersby with the aroma of yakitori (grilled skewered chicken) and takoyaki (octopus balls), while colorful billboards and LED screens illuminate the night sky. Amidst the hustle and bustle, there are pockets of tranquility to be found in parks like Shinjuku Gyoen, where visitors can escape the urban chaos and immerse themselves in nature."
            + "<br><br>"
            + "As day turns to night, Shinjuku transforms into a playground for nightlife enthusiasts. Kabukicho, Tokyo's notorious red-light district, comes alive with a cacophony of nightlife venues, including bars, nightclubs, and hostess clubs. The district pulsates with energy as revelers spill out onto the streets, creating a vibrant and intoxicating atmosphere that epitomizes Tokyo's reputation as a city that never sleeps."
            + "<br><img src = \"image/shinjuku_machine_3.png\" alt=\"Shinjuku machine image3\" />"
            + "<br><br>"
            + "In essence, Shinjuku is more than just a geographical location; it's a microcosm of Tokyo's diverse and ever-evolving urban landscape. From its towering skyscrapers to its labyrinthine alleyways, Shinjuku encapsulates the essence of modern Japan, where tradition and innovation collide to create an unforgettable sensory experience."
    },

    {   name: "Shibuya",
        x: "1290",
        y: "1600",
        reality: "test",
        machine: "Shibuya, one of Tokyo's most vibrant and bustling districts, is a captivating blend of modernity and tradition, where the pulse of the city beats strongest. Located in the heart of Tokyo, Shibuya is renowned for its energetic atmosphere, cutting-edge fashion, and vibrant nightlife, making it a magnet for both locals and tourists alike."
        + "<br><img src = \"image/shibuya_machine_1.png\" alt=\"Shinjuku machine image1\" />"
        + "<br><br>"
        + "At the epicenter of Shibuya lies the iconic Shibuya Crossing, often referred to as the busiest pedestrian intersection in the world. Here, throngs of people converge from all directions, creating a mesmerizing spectacle of movement and activity. Towering skyscrapers adorned with neon signs overlook the crossing, adding to the district's electric ambiance."
        + "<br><br>"
        + "Streets lined with trendy boutiques, department stores, and fashionable cafes beckon fashion enthusiasts and trendsetters. Shibuya's fashion scene is eclectic, ranging from high-end designer labels to quirky streetwear brands, reflecting the district's reputation as a global style capital."
        + "<br><img src = \"image/shibuya_machine_2.png\" alt=\"Shinjuku machine image2\" />"
        + "<br><br>"
        + "Amidst the modernity, traces of traditional Japanese culture can still be found in Shibuya. Hidden alleyways, known as \"yokocho,\" are home to cozy izakayas and traditional eateries serving up local delicacies such as yakitori and ramen. These narrow streets offer a nostalgic glimpse into old Tokyo, providing a stark contrast to the frenetic pace of Shibuya's main thoroughfares."
        + "<br><br>"
        + "As night falls, Shibuya transforms into a playground for nightlife aficionados. Countless bars, clubs, and karaoke joints pulse with music and laughter, catering to every taste and preference. The district's vibrant nightlife scene ensures that the party never stops, drawing revelers from dusk until dawn."
        + "<br><img src = \"image/shibuya_machine_3.png\" alt=\"Shinjuku machine image3\" />"
        + "<br><br>"
        + "Yet, amidst the chaos and excitement, Shibuya exudes a sense of organized chaos, where everything seems to flow seamlessly. The rhythm of the city, punctuated by the sound of footsteps and the hum of traffic, creates an intoxicating symphony that is uniquely Shibuya. It's a place where the old and the new collide, where tradition meets innovation, and where every corner holds the promise of adventure and discovery."
    },

    {   name: "Harajuku",
        x: "1318",
        y: "1414",
        reality: "test",
        machine: "Harajuku, nestled within the bustling city of Tokyo, is a vibrant and eclectic district that pulsates with energy and creativity. Renowned for its avant-garde fashion, quirky street style, and unique subcultures, Harajuku is a melting pot where tradition meets innovation, and where the past harmonizes with the present. My memory of Harajuku paints a picture of a place where every corner seems to exude a sense of excitement and individuality."
        + "<br><img src = \"image/harajuku_machine_1.png\" alt=\"Harajuku machine image1\" />"
        + "<br><br>"
        + "Walking through the streets of Harajuku, one encounters a kaleidoscope of colors, sounds, and sights. The iconic Takeshita Street is a narrow pedestrian thoroughfare that teems with crowds of locals and tourists alike, all eager to explore its myriad of shops, cafes, and boutiques. From trendy clothing stores offering the latest fashion trends to quirky accessory shops selling everything from eccentric hats to outrageous socks, Takeshita Street is a haven for fashion enthusiasts and trendsetters."
        + "<br><br>"
        + "Beyond the hustle and bustle of Takeshita Street lies the tranquil oasis of Yoyogi Park. Spanning over 134 acres, this expansive green space offers a welcome respite from the frenetic pace of city life. Here, amidst the lush foliage and serene ponds, locals gather to picnic, practice yoga, or simply unwind beneath the shade of towering trees. On weekends, Yoyogi Park transforms into a hub of activity, with various cultural events, live performances, and flea markets attracting throngs of visitors from near and far."
        + "<br><img src = \"image/harajuku_machine_2.png\" alt=\"Harajuku machine image2\" />"
        + "<br><br>"
        + "For those with a penchant for the avant-garde, Harajuku's side streets and alleyways are a treasure trove of hidden gems waiting to be discovered. From niche vintage stores selling retro clothing and accessories to independent galleries showcasing the works of emerging artists, there is no shortage of opportunities to indulge in Tokyo's thriving underground art scene. Every shopfront and storefront in Harajuku tells a story, each one contributing to the district's rich tapestry of culture and creativity."
        + "<br><br>"
        + "Yet, perhaps the most captivating aspect of Harajuku is its people. A diverse tapestry of personalities and identities converges in this eclectic district, each one adding to its vibrant atmosphere. From the elaborately dressed cosplayers posing for photos in front of the iconic Harajuku Station to the stylish fashionistas strutting their stuff along Omotesando Avenue, Harajuku is a haven for self-expression and individuality."
        + "<br><img src = \"image/harajuku_machine_3.png\" alt=\"Harajuku machine image3\" />"
        + "<br><br>"
        + "In my memory, Harajuku is more than just a place—it's a state of mind. It's a celebration of diversity, creativity, and the boundless possibilities that arise when different cultures and ideas collide. It's a reminder that in the midst of the chaos and noise of urban life, there is beauty to be found in the unconventional, the unexpected, and the extraordinary."
    },

    {   name: "Akihabara",
        x: "2420",
        y: "853",
        reality: "test",
        machine: "Akihabara, located in the heart of Tokyo, Japan, is a vibrant and bustling district renowned worldwide as the epicenter of otaku culture and electronics. Known colloquially as \"Akiba,\" it's a kaleidoscope of neon lights, towering billboards, and a constant hum of activity that engulfs visitors in a sensory overload. The district is a melting pot of modernity and tradition, where cutting-edge technology intersects with the nostalgic charm of Japan's pop culture."
        + "<br><img src = \"image/akihabara_machine_1.png\" alt=\"Akihabara machine image1\" />"
        + "<br><br>"
        + "As you step out of the train station into the streets of Akihabara, you're immediately greeted by the iconic sights and sounds that define the district. Neon signs adorn every building, advertising the latest anime releases, manga stores, and electronics retailers. The streets are teeming with people, from avid gamers to curious tourists, all eager to explore the myriad of shops and attractions that line the bustling thoroughfares."
        + "<br><br>"
        + "One of the most prominent features of Akihabara is its vast array of electronics stores, offering everything from the latest gadgets to rare components for tech enthusiasts and hobbyists. Multi-story buildings packed with rows upon rows of electronics beckon shoppers to peruse their wares, while skilled salespeople offer expert advice on the latest trends in technology."
        + "<br><img src = \"image/akihabara_machine_2.png\" alt=\"Akihabara machine image2\" />"
        + "<br><br>"
        + "However, Akihabara is perhaps best known for its vibrant otaku culture. Anime, manga, and video game enthusiasts flock to the district to indulge their passions, browsing through countless specialty shops that cater to every imaginable fandom. Maid cafes, where waitresses dressed in maid costumes serve themed food and drinks, dot the streets, adding to the district's quirky charm and drawing in curious onlookers."
        + "<br><br>"
        + "Beyond its commercial offerings, Akihabara also boasts a rich history and cultural heritage. Hidden among the modern buildings are pockets of old Tokyo, where traditional izakayas (Japanese pubs) and historic shrines offer a glimpse into the district's past. Amidst the chaos of neon lights and bustling crowds, visitors can find moments of tranquility and reflection, reminding them of the deep roots that anchor Akihabara in Japanese culture."
        + "<br><img src = \"image/akihabara_machine_3.png\" alt=\"Akihabara machine image3\" />"
        + "<br><br>"
        + "In essence, Akihabara is a dynamic and eclectic district that captures the essence of modern Tokyo. It's a place where technology, pop culture, and tradition converge, creating an electrifying atmosphere that captivates visitors from around the world and ensures that Akihabara remains a must-visit destination for anyone seeking a taste of Japan's unique blend of past and future."
    },

    {   name: "Roppongi",
        x: "1819",
        y: "1545",
        reality: "When talking about Roppongi, the first thing came to my mind is absolutely the Tokyo Tower. It is a pretty beautiful place, where you can see a bird view of Tokyo from there. During holidays, Tokyo Tower will also be decorated with different lights. We went during Christmas times, so the Tower also get its Christmas custom. So as the road at Roppongi Keyakizaka at Roppongi Hills. The streets are decorated with lights and you can see Tokyo Tower from there (always the best place to obverse Tokyo Tower), which is really beautiful." 
	+ "<br><br>"
	+ "There also locates one big Tsutaya bookstore. I don’t really been there a lot, generally because Roppongi is kinds of crowded. But I like the atmosphere there and it the bookstore is really located at a nice place."
	+ "<br><br>"
	+ "Another place that I can remember deep of is the Azabujuban. It’s near Roppongi, but a lot more quite and less crowded. You can always find amazing restaurants and dessert shops there. ",
	
        machine: "Roppongi, located in the heart of Tokyo, is a vibrant and dynamic district that pulsates with energy day and night. As one of Tokyo's premier entertainment and nightlife hubs, Roppongi offers a diverse array of experiences that cater to a wide range of tastes and interests."
        + "<br><img src = \"image/roppongi_machine_1.png\" alt=\"Roppongi machine image1\" />"
        + "<br><br>"
        + "During the day, Roppongi buzzes with activity as locals and tourists alike explore its myriad attractions. The district is home to several iconic landmarks, including the Mori Art Museum and Tokyo Midtown, which attract art enthusiasts and culture seekers from around the world. The Mori Art Museum, situated atop the Mori Tower, offers breathtaking views of the city skyline and hosts rotating exhibitions showcasing both traditional and contemporary art."
        + "<br><br>"
        + "Aside from its cultural offerings, Roppongi boasts a bustling commercial scene, with numerous shops, boutiques, and department stores lining its streets. Visitors can indulge in retail therapy at high-end fashion outlets or browse for unique souvenirs and gifts at local markets and artisanal shops."
        + "<br><img src = \"image/roppongi_machine_2.png\" alt=\"Roppongi machine image2\" />"
        + "<br><br>"
        + "As evening falls, Roppongi transforms into a vibrant nightlife destination, with its streets illuminated by neon lights and bustling with activity. The district is renowned for its eclectic mix of bars, clubs, and restaurants, where revelers can enjoy everything from craft cocktails and gourmet cuisine to live music and DJ sets."
        + "<br><br>"
        + "One of the highlights of Roppongi's nightlife scene is its diverse range of dining options, which span the culinary spectrum from traditional Japanese izakayas to international fusion restaurants. Whether craving sushi, ramen, or world-class steak, visitors are spoiled for choice when it comes to dining in Roppongi."
        + "<br><img src = \"image/roppongi_machine_3.png\" alt=\"Roppongi machine image3\" />"
        + "<br><br>"
        + "In addition to its entertainment and dining offerings, Roppongi also serves as a hub for business and commerce, with many multinational corporations and foreign embassies located in the area. This international influence adds to the district's cosmopolitan atmosphere, making it a melting pot of cultures and languages."
        + "<br><br>"
        + "Overall, Roppongi is a dynamic and multifaceted district that offers something for everyone, whether exploring its cultural attractions by day or immersing oneself in its vibrant nightlife after dark. With its unique blend of art, commerce, and entertainment, Roppongi truly embodies the spirit of Tokyo's eclectic and ever-evolving urban landscape."
    },

    {   name: "Ginza",
        x: "2322",
        y: "1317",
        reality: "test",
        machine: "Ginza, located in the heart of Tokyo, is a vibrant and bustling district renowned for its upscale shopping, dining, and entertainment options. As one of Tokyo's most iconic neighborhoods, Ginza exudes an air of sophistication and elegance that draws locals and tourists alike."
        + "<br><img src = \"image/ginza_machine_1.png\" alt=\"Ginza machine image1\" />"
        + "<br><br>"
        + "The streets of Ginza are lined with towering skyscrapers, adorned with neon lights and billboards that illuminate the area, creating a mesmerizing spectacle, especially after dark. The architecture seamlessly blends modernity with tradition, with sleek glass facades standing alongside historic buildings, reflecting the area's rich cultural heritage."
        + "<br><br>"
        + "One of the main attractions of Ginza is its luxury shopping scene, featuring flagship stores of renowned international brands as well as high-end boutiques showcasing the latest fashion trends. From designer clothing and accessories to cutting-edge electronics, Ginza offers a diverse array of products catering to every taste and preference."
        + "<br><img src = \"image/ginza_machine_2.png\" alt=\"Ginza machine image2\" />"
        + "<br><br>"
        + "Ginza is also a paradise for food enthusiasts, with an abundance of restaurants, cafes, and eateries serving delectable cuisine from around the world. Whether you're craving authentic Japanese sushi, French pastries, or Italian pasta, you'll find a wide selection of gastronomic delights to satisfy your palate."
        + "<br><br>"
        + "In addition to shopping and dining, Ginza is home to numerous art galleries, theaters, and cultural institutions, providing ample opportunities for entertainment and enrichment. Visitors can catch a live performance at one of the theaters, explore contemporary art exhibitions, or simply immerse themselves in the vibrant atmosphere of the district."
        + "<br><img src = \"image/ginza_machine_3.png\" alt=\"Ginza machine image3\" />"
        + "<br><br>"
        + "Moreover, Ginza is well-connected to other parts of Tokyo via its efficient transportation network, including subway lines and bus routes, making it easily accessible for both residents and tourists alike."
        + "<br><br>"
        + "Overall, Ginza is a dynamic and captivating district that offers a unique blend of luxury, culture, and entertainment, making it a must-visit destination for anyone exploring Tokyo.",
    },

    {   name: "Home",
        x: "1519",
        y: "1755",
        reality: "test",
        machine: "As you enter the home located in Tokyo, you're immediately struck by the minimalist yet functional design. The entrance area is compact but efficiently organized, with a shoe rack neatly arranged to the side and a small space for umbrellas. Sliding doors adorned with delicate shoji screens lead into the main living area, creating a sense of openness and flow."
        + "<br><img src = \"image/home_machine_1.png\" alt=\"Home machine image1\" />"
        + "<br><br>"
        + "The living room is bright and airy, thanks to large windows that let in plenty of natural light. A comfortable yet sleek sofa sits against one wall, facing a low coffee table adorned with a simple vase of fresh flowers. The tatami mat flooring adds a traditional touch to the modern space, creating a harmonious blend of old and new."
        + "<br><br>"
        + "Adjacent to the living room is a cozy dining area, featuring a low dining table surrounded by cushions for seating. A paper lantern hangs from the ceiling, casting a warm glow over the space during evening meals. The compact kitchen is efficiently laid out along one wall, with sleek cabinets and modern appliances providing everything needed for culinary endeavors."
        + "<br><img src = \"image/home_machine_2.png\" alt=\"Home machine image2\" />"
        + "<br><br>"
        + "A sliding door leads from the living area to the bedroom, which is a serene retreat from the hustle and bustle of city life. The room is furnished with a low platform bed topped with crisp white linens and soft pillows. A large window offers views of the Tokyo skyline, providing a peaceful backdrop for relaxation."
        + "<br><br>"
        + "Next to the bedroom is a compact yet functional bathroom, complete with a deep soaking tub and a shower area. Clean lines and minimalistic design elements create a sense of tranquility, making it the perfect place to unwind after a long day."
        + "<br><img src = \"image/home_machine_3.png\" alt=\"Home machine image3\" />"
        + "<br><br>"
        + "Overall, the space of the home in Tokyo is thoughtfully designed to maximize comfort and functionality while embracing the beauty of Japanese aesthetics. It's a peaceful oasis in the heart of the bustling city, offering a retreat from the outside world while still feeling connected to the vibrant energy of Tokyo."
    },
];

var console_width, console_height;
var cur = 2;

var ml, mt, mr, mb;
var map_width, map_height;
var prev;

function loadSize() {

    console_width = window.innerWidth - 20;
    console_height = window.innerHeight - 20;

    searchCenterID.style.display = "none";
    controlCenterID.style.display = "none";

    mapID.src = "icon.gif";
    mapID.style.left = console_width  / 2 - 330 +"px";
    mapID.style.top  = console_height / 2 - 240 +"px";
    mapID.style.width = "640px";
    mapID.style.height = "480px";

    welcomeID.innerHTML = "Welcome to Human VS. Machine's View of Tokyo";
    welcomeID.style.color = "white";
    welcomeID.style.fontSize = "40pt";
    welcomeID.style.position = "absolute";
    welcomeID.style.left = console_width  / 2 - 550 +"px";
    welcomeID.style.top  = console_height / 2 - 300 +"px";

    map_width = mapArray[cur].width;
    map_height = mapArray[cur].height;
    // mr = console_width - map_width - console_width / 2;
    // mb = console_height - map_height - console_height / 2;
    ml = 0 - mapArray[cur].width / 2 + console_width / 2;
    mt = 0 - mapArray[cur].height / 2 + console_height / 2;

    if(ml > console_width/2) ml = console_width/2;
    if(mt > console_height/2) mt = console_height/2;
    
    // if(ml < mr ) ml = mr;
    // if(mt < mb) mt = mb;

    // ml = 0;
    // mt = 0;
    mr = console_width - map_width;
    mb = console_height - map_height;

    // if(ml > 0) ml = 0;
    // if(mt > 0) mt = 0;
    
    if(ml < mr) ml = mr;
    if(mt < mb) mt = mb;

    mapconsoleID.style.position = "absolute";
    mapconsoleID.style.top = "0px";
    mapconsoleID.style.left = "0px";
    mapconsoleID.style.width = console_width + "px";
    mapconsoleID.style.height = console_height + "px";
    mapconsoleID.style.border = "10px solid gray";
    mapconsoleID.style.overflow = "hidden";

    setTimeout("mapID.src = mapArray[cur].filename;", 1500);

    setTimeout(function() {
        // mapID.src = mapArray[cur].filename;
        mapID.style.width = map_width + "px";
        mapID.style.height = map_height + "px";
        mapID.style.left = ml + "px";
        mapID.style.top = mt + "px";
        welcomeID.style.display = "none";
        searchCenterID.style.display = "block";
        controlCenterID.style.display = "block";
    }, 1500);

    closeprefaceID.style.position = "absolute";
    closeprefaceID.style.left = "220px";
    closeprefaceID.style.width = "160px";
    closeprefaceID.style.display = "none";

    prefaceID.style.display = "none";

    setTimeout(function() {
        prefaceID.style.position = "absolute";
        prefaceID.style.left = console_width / 2 - 300 + "px";
        prefaceID.style.top = console_height / 2 - 300 + "px";
        prefaceID.style.width = "600px";
        prefaceID.style.height = "600px";
        prefaceID.style.backgroundColor = "cornsilk";
        prefaceID.style.border = "5px solid gray";
        prefaceID.style.display = "block";
        closeprefaceID.style.display = "block";
    }, 1500);

    closeresultID.style.position = "absolute";
    closeresultID.style.left = "220px";
    closeresultID.style.width = "160px";
    closeresultID.style.display = "none";

    resultID.style.position = "absolute";
    resultID.style.left = console_width / 2 - 300 + "px";
    resultID.style.top = console_height / 2 - 275 + "px";
    resultID.style.width = "600px";
    resultID.style.height = "550px";
    resultID.style.backgroundColor = "cornsilk";
    resultID.style.border = "5px solid gray";
    resultID.style.display = "none";

    controlCenterID.style.position = "absolute";
    controlCenterID.style.left = console_width + "px";
    controlCenterID.style.top = console_height + "px";
    
    smallerID.style.position = "absolute";
    smallerID.style.left = "-75px";
    smallerID.style.top = "-104px";
    smallerID.style.width = "48px";
    smallerID.style.height = "46px";

    largerID.style.position = "absolute";
    largerID.style.left = "-75px";
    largerID.style.top = "-150px";
    largerID.style.width = "48px";
    largerID.style.height = "46px";

    sizebuttonID.style.position = "absolute";
    sizebuttonID.style.left = "-75px";
    sizebuttonID.style.top = "-150px";

    upID.style.position = "absolute";
    upID.style.top = "-185px";
    upID.style.left = "-200px";

    downID.style.position = "absolute";
    downID.style.top = "-90px";
    downID.style.left = "-200px";

    leftID.style.position = "absolute";
    leftID.style.top = "-145px";
    leftID.style.left = "-245px";

    rightID.style.position = "absolute";
    rightID.style.top = "-145px";
    rightID.style.left = "-140px";

    searchCenterID.style.position = "absolute";
    searchCenterID.style.left = "100px";
    searchCenterID.style.top = "50px"
    searchboxID.style.width = "405px";
    searchboxID.style.height = "34px";

    popID.style.position = "absolute";
    popID.style.left = "100px";
    popID.style.top = "100px"
    // popID.style.width = "480px";
    // popID.style.height = "600px";
    popID.style.width = console_width / 4 + 200 + "px";
    popID.style.height = console_height - 200 + "px";
    popID.style.backgroundColor = "cornsilk";
    popID.style.border = "5px solid gray";
    popID.style.display = "none";

    closeID.style.position = "absolute";
    closeID.style.left = console_width / 4 + 160 + "px";
    closeID.style.top = "0px"
    closeID.style.display = "none";

    switchID.style.position = "absolute";
    switchID.style.left = console_width / 4 + 35 + "px";
    switchID.style.top = "0px"
    switchID.style.width = "125px";
    switchID.style.display = "none";

    locID.style.margin = "10px";

    buttonID.style.position = "absolute";
    buttonID.style.left = "410px";
    buttonID.style.top = "0px";
    buttonID.style.width = "80px";
    buttonID.style.height = "35px";

    prefacebuttonID.style.position = "absolute";
    prefacebuttonID.style.left = "515px";
    prefacebuttonID.style.top = "0px";
    prefacebuttonID.style.width = "80px";
    prefacebuttonID.style.height = "35px";

    resultbuttonID.style.position = "absolute";
    resultbuttonID.style.left = "600px";
    resultbuttonID.style.top = "0px";
    resultbuttonID.style.width = "80px";
    resultbuttonID.style.height = "35px";

    pinID.src = "none.png";
    pinID.style.position = "absolute";
    pinID.style.left = console_width/2 - 120 + "px";
    pinID.style.top = console_height/2 - 95 + "px";
    pinID.style.width = "60px";
    pinID.style.height = "60px";
}

function handleResize() {
    var original_width = console_width, orginal_height = console_height;
    console_width = window.innerWidth - 20;
    console_height = window.innerHeight - 20;
    mr = mr - (original_width / 2 - console_width / 2);
    mb = mb - (orginal_height / 2 - console_height / 2);
    ml = ml - (original_width / 2 - console_width / 2);
    mt = mt - (orginal_height / 2 - console_height / 2);

    if(ml > console_width / 2) ml = console_width / 2;
    if(mt > console_height / 2) mt = console_height / 2;
    
    if(ml < mr ) ml = mr;
    if(mt < mb) mt = mb;

    mapconsoleID.style.position = "absolute";
    mapconsoleID.style.top = "0px";
    mapconsoleID.style.left = "0px";
    mapconsoleID.style.width = console_width + "px";
    mapconsoleID.style.height = console_height + "px";
    mapconsoleID.style.border = "10px solid gray";
    mapconsoleID.style.overflow = "hidden";
    
    mapID.style.left = ml + "px";
    mapID.style.top = mt + "px";

    controlCenterID.style.position = "absolute";
    controlCenterID.style.left = console_width + "px";
    controlCenterID.style.top = console_height + "px";
    
    smallerID.style.position = "absolute";
    smallerID.style.left = "-75px";
    smallerID.style.top = "-104px";
    smallerID.style.width = "48px";
    smallerID.style.height = "46px";

    largerID.style.position = "absolute";
    largerID.style.left = "-75px";
    largerID.style.top = "-150px";
    largerID.style.width = "48px";
    largerID.style.height = "46px";

    sizebuttonID.style.position = "absolute";
    sizebuttonID.style.left = "-75px";
    sizebuttonID.style.top = "-150px";

    upID.style.position = "absolute";
    upID.style.top = "-185px";
    upID.style.left = "-200px";

    downID.style.position = "absolute";
    downID.style.top = "-90px";
    downID.style.left = "-200px";

    leftID.style.position = "absolute";
    leftID.style.top = "-145px";
    leftID.style.left = "-245px";

    rightID.style.position = "absolute";
    rightID.style.top = "-145px";
    rightID.style.left = "-140px";

    buttonID.style.position = "absolute";
    buttonID.style.left = "410px";
    buttonID.style.top = "0px";
    buttonID.style.width = "80px";
    buttonID.style.height = "35px";

    pinID.src = "none.png";
    pinID.style.position = "absolute";
    pinID.style.left = console_width/2 - 120 + "px";
    pinID.style.top = console_height/2 - 95 + "px";
    pinID.style.width = "60px";
    pinID.style.height = "60px";
}

function newMap() {
    mapID.src = mapArray[cur].filename;
    mapID.style.width = mapArray[cur].width + "px";
    mapID.style.height = mapArray[cur].height + "px";
    // mr = console_width - mapArray[cur].width - console_width / 2;
    // mb = console_height - mapArray[cur].height - console_height / 2;
    mr = console_width - mapArray[cur].width;
    mb = console_height - mapArray[cur].height;

    var xx = 0 - (console_width/2 - ml) / mapArray[prev].width * mapArray[cur].width + console_width / 2;
    var yy = 0 - (console_height/2 - mt) / mapArray[prev].height * mapArray[cur].height + console_height / 2;

    // if(xx > console_width/2) xx = console_width/2;
    if(xx > 0) xx = 0;
    if(xx < mr ) xx = mr;

    // if(yy > console_height/2) yy = console_height/2;
    if(yy > 0) yy = 0;
    if(yy < mb) yy = mb;

    mapID.style.left = xx + "px";
    mapID.style.top = yy + "px";    

    ml = xx;
    mt = yy;
}

function getHeight() {
	return parseInt(mapconsoleID.style.height);
}

function getWidth() {
	return parseInt(mapconsoleID.style.width);
}

function getTop() {
	return parseInt(mapconsoleID.style.top);
}

function getLeft() {
	return parseInt(mapconsoleID.style.left);
}

function inMap(x,y) {
    if( x >= 50 && y >= 50 && x <= 450 && y <= 80) return false;

	return (x >= getLeft() && x <= getLeft() + getWidth() && y >= getTop() && y <= getTop() + getHeight());
}

var isDragging = false;
var x,y;

function handleMouseDown(evt) {
    pinID.src = "none.png";
    x = evt.clientX;
    y = evt.clientY;
    mapID.style.transition = "none";

	if (inMap(x,y) && !isDragging) {
        isDragging = true;
        evt.preventDefault();

        document.body.style.cursor = "move";
	}
}

function handleMouseUp(evt) {
	if (isDragging) {
        
        var xx = evt.clientX - (x - ml), yy = evt.clientY - (y - mt);

        // if(xx > console_width/2) xx = console_width/2;
        if(xx > 0) xx = 0;
        if(xx < mr ) xx = mr;

        // if(yy > console_height/2) yy = console_height/2;
        if(yy > 0) yy = 0;
        if(yy < mb) yy = mb;

        mapID.style.left = xx + "px";
        mapID.style.top = yy + "px";

        isDragging = false;	
        document.body.style.cursor = "default";

        ml = xx;
        mt = yy;
	}
}

function handleMouseMove(evt) {
    if (isDragging) {

        var xx = evt.clientX - (x - ml), yy = evt.clientY - (y - mt);

        // if(xx > console_width/2) xx = console_width/2;
        if(xx > 0)  xx = 0;
        if(xx < mr) xx = mr;

        // if(yy > console_height/2) yy = console_height/2;
        if(yy > 0)  yy = 0;
        if(yy < mb) yy = mb;

        mapID.style.left = xx + "px";
        mapID.style.top = yy + "px";

        evt.preventDefault();
    }
}

function doubleClick(evt) {
    var xx = console_width / 2 + 10 - evt.clientX, yy = console_height / 2 + 10 -evt.clientY;

    ml = ml + xx;
    mt = mt + yy;

    // if(ml > console_width/2) ml = console_width/2;
    // if(mt > console_height/2) mt = console_height/2;

    if(ml > 0) ml = 0;
    if(mt > 0) mt = 0;
    
    if(ml < mr ) ml = mr;
    if(mt < mb) mt = mb;

    mapID.style.left = ml + "px";
    mapID.style.top = mt + "px";
    mapID.style.transition = "left 1.2s linear, top 1.2s linear";
}

function larger() {
    if(cur < 4) {
        prev = cur;
        cur = cur + 1;
        newMap();
    }
}

function smaller() {
    if(cur > 0) {
        prev = cur;
        cur = cur - 1;
        newMap();
    }
}

function lefter() {
    ml = ml + 20;

    // if(ml > console_width/2) ml = console_width/2;
    if(ml > 0) ml = 0;

    mapID.style.left = ml + "px";
    mapID.style.transition = "left 0.2s linear";
}

function righter() {
    ml = ml - 20;

    if(ml < mr) ml = mr;

    mapID.style.left = ml + "px";
    mapID.style.transition = "none";
    mapID.style.transition = "left 0.2s linear";
}

function upper() {
    mt = mt + 20;

    // if(mt > console_height/2) mt = console_height/2;
    if(mt > 0) mt = 0;

    mapID.style.top = mt + "px";
    mapID.style.transition = "top 0.2s linear";
}

function downer() {
    mt = mt - 20;

    if(mt < mb) mt = mb;

    mapID.style.top = mt + "px";
    mapID.style.transition = "top 0.2s linear";
}

function search() {
    for(var i = 0; i < locationArray.length; i++) {
        if(locationArray[i].name == searchboxID.value) {
            cur_location = locationArray[i].name;
            cur_location_i = i;
            switchID.value = "Switch to Machine";
            textID.innerHTML = locationArray[i].reality;

            var xx = locationArray[i].x / original_w * mapArray[cur].width;
            var yy = locationArray[i].y / original_h * mapArray[cur].height;
            // var xx = locationArray[i].x / mapArray[0].width * mapArray[cur].width;
            // var yy = locationArray[i].y / mapArray[0].width * mapArray[cur].height;

            xx = xx - (console_width/2 - ml);
            yy = yy - (console_height/2 - mt);

            ml = ml - xx;
            mt = mt - yy;

            if(ml > console_width/2) ml = console_width/2;
            if(mt > console_height/2) mt = console_height/2;

            // ml += (console_width/2  - ml - xx);
            // mt += (console_height/2 - mt - yy);

            if(ml > 0) {
                pinID.style.left = console_width/2 - 120 - ml + "px";
                ml = 0;
            }
            else if(ml < mr) {
                pinID.style.left = console_width/2 - 120 + (mr - ml) + "px";
                ml = mr;
            }
            else {
                pinID.style.left = console_width/2 - 120 + "px";
            }

            if(mt > 0) {
                pinID.style.top = console_height/2 - 95 - mt + "px";
                mt = 0;
            }
            else if(mt < mb) {
                pinID.style.top = console_height/2 - 95 + (mb - mt) + "px";
                mt = mb;
                // buttonID.value = "hELLO";
            }
            else {
                pinID.style.top = console_height/2 - 95 + "px";
            }

            
            // if(ml < mr) {
            //     // pinID.style.left = console_width/2 - 120 + "px";
            //     ml = mr;
            // }
            // else {
            //     // pinID.style.left = console_width/2 - 120 + "px";
            // }
            // if(mt < mb) {
            //     // pinID.style.left = console_width/2 - 120 + "px";
            //     mt = mb;
            // }
            // else {
            //     // pinID.style.top = console_height/2 - 95 + "px";
            // }

            mapID.style.left = ml + "px";
            mapID.style.top = mt + "px";
            mapID.style.transition = "left 1.2s linear, top 1.2s linear";

            setTimeout("pinID.src = 'pin.png';",1201);
            setTimeout("pop();",1201);
        }
    }
}

function pop() {
    popID.style.display = "block";
    closeID.style.display = "block";
    switchID.style.display = "block";
    pinID.src = "pin.png";
    locID.innerHTML = cur_location; 
}

function close_pop() {
    closeID.style.display = "none";
    popID.style.display = "none";
    switchID.style.display = "none";
}

function close_preface() {
    prefaceID.style.display = "none";
}

function show_preface() {
    prefaceID.style.display = "block";
}

function close_result() {
    resultID.style.display = "none";
}

function show_result() {
    resultID.style.display = "block";
    closeresultID.style.display = "block";
}

function switch_button() {
    if(switchID.value == "Switch to Machine") {
        switchID.value = "Switch to Reality";
        switch_machine();
    }
    else {
        switchID.value = "Switch to Machine";
        switch_real();
    }
}

function switch_machine() {
    textID.innerHTML = locationArray[cur_location_i].machine;
}

function switch_real() {
    textID.innerHTML = locationArray[cur_location_i].reality;
}

window.onload = loadSize();
window.addEventListener("resize",handleResize,false);

document.getElementById("mapconsole").addEventListener('dblclick', doubleClick,false);
document.addEventListener("mousedown",handleMouseDown,false);
document.addEventListener("mouseup",handleMouseUp,false);
document.addEventListener("mousemove",handleMouseMove,false);
