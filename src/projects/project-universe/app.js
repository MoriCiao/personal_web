console.log("JS執行中");
const pages = {
  homePage: `
                <hr class="border border-2 border-dark mt-1">
                <p class="slogan fw-bold fs-5">從高處俯瞰，那似乎只是渺小的一步；<br class="d-xl-none">但在宇宙的尺度中，那或許是一段穿越時空、翻越星辰的旅程。</p>
                <hr class="border border-2 border-dark">
                <!-- outdoor area -->
                <div class="d-md-flex d-lx-block">
                    <div class="exlpore col col-md-6 col-sm-12">
                        <h1 class="fw-bold">世界探索</h1>
                        <p class="mt-3 px-3">四季流轉，星辰輪迴；每一次探索，都是宇宙贈予的全新體驗。你有多久，沒有靜下心來感受泥土的氣息、傾聽海浪的低語？讓自然的脈動與宇宙的節奏，引領你走入一段靜謐且療癒的時光。</p>
                    </div>
                    <div class="exlpore col col-md-6 col-sm-12">
                        <!-- 幻燈片區-1 -->
                        <div id="carouselExampleIndicators" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src=".//reMakePicture/image-solid (1).svg" class="d-block w-75 m-auto"
                                        alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="./reMakePicture/image-solid (2).svg" class="d-block w-75 m-auto" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="./reMakePicture/image-solid (3).svg" class="d-block w-75 m-auto"
                                        alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            
                <hr class="border border-2 border-dark">
            
                <div class="d-md-flex d-lx-block">
                    <div class="exlpore col col-md-6 col-sm-12">
                        <h1 class="fw-bold">宇宙科學</h1>
                        <p class="mt-3 px-3">
                            從星雲誕生到黑洞旋渦，宇宙中令人目眩神迷的奇妙現象，背後蘊藏著億萬年來的祕密。如今，透過科學的眼睛，我們得以揭開這片星辰海洋的面紗，進入這個看似魔法、實則精密運作的宇宙機制。邀你一同踏上這段視覺與知識交織的旅程，探索藏於宇宙深處的奧祕與巧思，感受宇宙的秩序與浪漫。
                        </p>
                    </div>
            
                    <div class="exlpore col col-md-6 col-sm-12">
                        <div id="carouselExampleIndicators-2" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src=".//reMakePicture/image-solid (1).svg" class="d-block w-75 m-auto" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="./reMakePicture/image-solid (2).svg" class="d-block w-75 m-auto" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="./reMakePicture/image-solid (3).svg" class="d-block w-75 m-auto" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-2"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-2"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            
            
                <hr class="border border-2 border-dark">
            `,
  aboutUs: `
            <div class="container d-xl-flex d-md-block align-items-center ">
        <div class="me-2 col col-xxl-6 mb-md-4 d-flex justify-content-center">
            <img class="aboutimg w-50 m-auto" src="./reMakePicture/image-solid (5).svg" alt="">
        </div>
        <div class="me-2 px-3 col col-xxl-6 mb-md-4">
            <p class="">
                面對未知的新事物，生命會做出怎樣的回應？當與其他存在產生交會，那一刻不只是接觸，更是宇宙間能量的交流。自然界中的蟲鳴鳥語、風聲草動，無不蘊含著宇宙脈動的節奏，引領我們向內感知、向外連結。從不敢靠近到勇敢接觸，哪怕只是彼此更靠近了一點，對心靈而言，都是跨越了一座看不見的星山。只要我們不以俯視的角度評斷，而是選擇與萬物同行，就能一同沉浸於這場宇宙與生命交織的旅程之中。
            </p>
            <a class="text-decoration-none" href="#">Exploring the Universe</a>
        </div>
    </div>
    <hr class="border border-2 border-dark mt-1">
    <div class="container-xl mb-2">
        <div class="row">
            <img class="col col-xxl-4 col-md-12 img-fluid mx-auto d-block" style="max-width: 400px;"
                src="./reMakePicture/image-solid (5).svg" alt="">
            <div class="col col-xxl-8 col-md-12">
                <h1 class=" mx-auto d-block  teacher-name">斑鳩老師</h1>
    
                <ul class=" mx-auto d-block fs-5 description">
                    <li class="list-unstyled">環境教育專業人員（認證編號 EE209-XXXX）</li>
                    <li class="list-unstyled">台灣宇宙探索聯盟 專案策劃暨執行統籌（2019 至今</li>
                    <li class="list-unstyled">國立臺灣XX大學 環境資源與漁業科學系 學士</li>
                    <li class="list-unstyled">國立臺灣XX大學 生態溝通與教育推廣團</li>
                    <li class="list-unstyled">2013年XX大學「夜光精靈—螢火蟲特展」活動企劃組</li>
                    <li class="list-unstyled">創意表演社 團隊講師（魔術與互動教學設計）</li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="border border-2 border-dark mt-1">`,

  outdoor_1: `<div class="container text-center">
        <h1 class="my-3">宇宙源頭</h1>
        <div class="row m-auto">
    
            <!-- 幻燈片區 -->
            <div class="col-xxl-4">
                <div>
                    <div class="m-auto w-100">
                        <div id="carouselExample" class="carousel slide m-auto" style="width: 400px; height: 400px;">
                            <div class="carousel-inner m-auto" style="width: 400px; height: 400px; border-radius: 50%; ">
                                <div class="carousel-item active">
                                    <img src="./reMakePicture/image-solid (1).svg" class="d-block w-100" style="margin: auto;"
                                        alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="./reMakePicture/image-solid (1).svg"  class="d-block w-100" style="margin: auto;"
                                        alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="./reMakePicture/image-solid (1).svg"  class="d-block w-100" style="margin: auto;"
                                        alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="my-3 m-auto" style="width:400px;">
                            <a class="btn btn-primary text-decoration-none text-white"
                                href="#"
                                target="_blank" rel="noopener noreferrer">點我報名</a>
                        </div>
    
                    </div>
    
                </div>
            </div>
    
            <!-- 報名資訊 -->
            <div class="col-xxl-7 col d-block text-start m-auto px-xxl-3" style="max-width: 50vw;">
                <div class="px-3 pb-0" style="max-width: 30rem;">
                    <p class="" style="font-size: 0.8rem;">宇宙間流轉的能量，凝聚於大地湧出的甘露，是賜予生命最純粹的恩典。那沁涼的流水，蘊藏著微觀宇宙的豐饒與節奏。邀你一同踏上輕盈旅程，從星辰的指引出發，漫步至那生命之泉的源頭。</p>
                </div>
                <div class="px-3 pb-0" style="max-width: 30rem;">
                    <h5 class="text-warning fw-bolder">活動資訊:</h5>
                    <p class="" style="font-size: 0.8rem;">主題：XXXXXXXXXX。<br>
    
                        時間：3/8(六)XXXX~XXXX<br>
    
                        地點：XX公園 (報名成功後將於行前通知內註記集合位置)<br>
    
                        講師：XX老師<br>
    
                        開課人數：12人 <br>(或孩童人數達8人即滿班)</p>
                </div>
                <div class="px-3 pb-0" style="max-width: 30rem;">
                    <h5 class="text-warning fw-bolder">注意事項:</h5>
                    <p class="" style="font-size: 0.8rem;">建議攜帶物品：個人補充體力之點心、飲用水、雨具。<br>
    
                        為防蚊蟲叮咬，建議備薄外套、長褲、包鞋。<br>
    
                        觀察用具會由講師準備，請於活動結束後歸還。<br>
    
                        活動地點旁有路邊停車格及收費停車場可停車。<br>
    
                        因場地、天候狀況…等因素，授課老師保有調整活動之權利。<br></p>
                </div>
                <div class="px-3 pb-0" style="max-width: 30rem;">
                    <h5 class="text-warning fw-bolder">費用說明:</h5>
                    <p class="" style="font-size: 0.8rem;">
                        方案一：單人報名$400 (孩童報名須有成人報名陪同參與)<br>
    
                        方案二：兩大一小優惠$1000<br>
                        (第二位大人優惠價無法與全報優惠同時使用)<br>
                        <br>
                        (三歲以下孩童隨行僅收保險費)<br>
                    </p>
                </div>
            </div>
    
        </div>
    </div>`,
  outdoor_2: `<div class="container text-center">
        <h1 class="my-3">宇宙之花</h1>
        <div class="row m-auto">
    
            <!-- 幻燈片區 -->
            <div class="col-xxl-4">
                <div>
                    <div class="m-auto w-100">
                        <div id="carouselExample" class="carousel slide m-auto" style="width: 400px; height: 400px;">
                            <div class="carousel-inner m-auto" style="width: 400px; height: 400px; border-radius: 50%; ">
                                <div class="carousel-item active">
                                    <img src="./reMakePicture/image-solid (1).svg" class="d-block w-100" style="margin: auto;"
                                        alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="./reMakePicture/image-solid (1).svg" class="d-block w-100" style="margin: auto;"
                                        alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="./reMakePicture/image-solid (1).svg" class="d-block w-100" style="margin: auto;"
                                        alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="my-3 m-auto" style="width:400px;">
                            <a class="btn btn-primary text-decoration-none text-white" href="#" target="_blank"
                                rel="noopener noreferrer">點我報名</a>
                        </div>
            
                    </div>
            
                </div>
            </div>
    
            <!-- 報名資訊 -->
            <div class="col-xxl-7 col d-block text-start m-auto px-xxl-3" style="max-width: 50vw;">
                <div class="px-3 pb-0" style="max-width: 30rem;">
                    <p class="" style="font-size: 0.8rem;">
                        在車水馬龍的都市喧囂之下，沉睡著來自千萬年前的海中之花，如同宇宙記憶中的一頁書籤，靜靜訴說著臺灣曾沉沒於海洋的過往。讓我們一同走訪芝山岩，循著地層的脈絡，揭開臺北盆地的宇宙篇章，穿越時空，與這千年之花，再次相遇。</p>
                </div>
                <div class="px-3 pb-0" style="max-width: 30rem;">
                    <h5 class="text-warning fw-bolder">活動資訊:</h5>
                    <p class="" style="font-size: 0.8rem;">主題：認識XX盆地地質歷史、海相化石觀察。<br>
                        時間：3/22(六)XXXX~XXXX<br>
                        地點：XX岩 (報名成功後將於行前通知內註記集合位置)<br>
                        講師：XX老師<br>
                        開課人數：12人 (或孩童人數達8人即滿班)
                    </p>
                </div>
                <div class="px-3 pb-0" style="max-width: 30rem;">
                    <h5 class="text-warning fw-bolder">注意事項:</h5>
                    <p class="" style="font-size: 0.8rem;">建議攜帶物品：個人補充體力之點心、飲用水、雨具。<br>
                        為防蚊蟲叮咬，建議備薄外套、長褲、包鞋。<br>
                        活動地點旁有路邊停車格及收費停車場可停車。<br>
                        因場地、天候狀況…等因素，授課老師保有調整活動之權利。</p>
                </div>
                <div class="px-3 pb-0" style="max-width: 30rem;">
                    <h5 class="text-warning fw-bolder">費用說明:</h5>
                    <p class="" style="font-size: 0.8rem;">
                        方案一：單人報名$400 (孩童報名須有成人報名陪同參與)<br>
                        方案二：兩大一小優惠$1000 <br>(第二位大人優惠價無法與全報優惠同時使用)<br>
                        (三歲以下孩童隨行僅收保險費)
                    </p>
                </div>
            </div>
    
        </div>
    </div>`,
  outdoor_3: `<div class="container text-center">
        <h1 class="my-3">夏夜星空</h1>
        <div class="row m-auto">
    
            <!-- 幻燈片區 -->
            <div class="col-xxl-4">
                <div>
                    <div class="m-auto w-100">
                        <div id="carouselExample" class="carousel slide m-auto" style="width: 400px; height: 400px;">
                            <div class="carousel-inner m-auto" style="width: 400px; height: 400px; border-radius: 50%; ">
                                <div class="carousel-item active">
                                    <img src="./reMakePicture/image-solid (1).svg" class="d-block w-100" style="margin: auto;"
                                        alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="./reMakePicture/image-solid (1).svg" class="d-block w-100" style="margin: auto;"
                                        alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="./reMakePicture/image-solid (1).svg" class="d-block w-100" style="margin: auto;"
                                        alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="my-3 m-auto" style="width:400px;">
                            <a class="btn btn-primary text-decoration-none text-white" href="#" target="_blank"
                                rel="noopener noreferrer">點我報名</a>
                        </div>
            
                    </div>
            
                </div>
            </div>
    
            <!-- 報名資訊 -->
            <div class="col-xxl-7 col d-block text-start m-auto px-xxl-3" style="max-width: 50vw;">
                <div class="px-3 pb-0" style="max-width: 30rem;">
                    <p class="" style="font-size: 0.8rem;">
                        寧靜的夏夜裡，宇宙低垂於天際，繁星如鑽，浩瀚銀河宛若流動的光帶，為夜空披上一層神秘的夢幻。小徑兩旁，螢火蟲猶如宇宙微塵，在草叢間點亮一顆顆細碎的黃光，彷彿星辰墜落塵世，與天上的星海相呼應。春夏交替的夜晚，是與宇宙對話的最佳時刻，也是賞螢的黃金季節。
                    </p>
                </div>
                <div class="px-3 pb-0" style="max-width: 30rem;">
                    <h5 class="text-warning fw-bolder">活動資訊:</h5>
                    <p class="" style="font-size: 0.8rem;">主題：認識螢火蟲生態、夜間步道探索。<br>
    
                        時間：場次一4/13(日)XXXX~XXXX<br>
    
                        場次二4/27(日)XXXX~XXXX<br>
    
                        地點：貓空 (報名成功後將於行前通知內註記集合位置)<br>
    
                        講師：XX老師<br>
    
                        開課人數：12人 (或孩童人數達8人即滿班)
                    </p>
                </div>
                <div class="px-3 pb-0" style="max-width: 30rem;">
                    <h5 class="text-warning fw-bolder">注意事項:</h5>
                    <p class="" style="font-size: 0.8rem;">建議攜帶物品：個人補充體力之點心、飲用水、雨具。<br>
    
                        為防蚊蟲叮咬，建議備薄外套、長褲、包鞋。<br>
    
                        照明燈具及紅色玻璃紙會由講師準備，請於活動結束後歸還。<br>
    
                        集合處路旁白線可停車(步行約10min)。<br>
    
                        因場地、天候狀況…等因素，授課老師保有調整活動之權利。</p>
                </div>
                <div class="px-3 pb-0" style="max-width: 30rem;">
                    <h5 class="text-warning fw-bolder">費用說明:</h5>
                    <p class="" style="font-size: 0.8rem;">
                        方案一：單人報名$400 (孩童報名須有成人報名陪同參與)<br>
    
                        方案二：兩大一小優惠$1000 <br>(第二位大人優惠價無法與全報優惠同時使用)<br>
    
                        (三歲以下孩童隨行僅收保險費)
                    </p>
                </div>
            </div>
    
        </div>
    </div>`,
  outdoor_4: `<div class="container text-center">
        <h1 class="my-3">星空舞會</h1>
        <div class="row m-auto">
    
            <!-- 幻燈片區 -->
            <div class="col-xxl-4">
                <div>
                    <div class="m-auto w-100">
                        <div id="carouselExample" class="carousel slide m-auto" style="width: 400px; height: 400px;">
                            <div class="carousel-inner m-auto" style="width: 400px; height: 400px; border-radius: 50%; ">
                                <div class="carousel-item active">
                                    <img src="./reMakePicture/image-solid (1).svg" class="d-block w-100"
                                        style="margin: auto;" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="./reMakePicture/image-solid (1).svg" class="d-block w-100"
                                        style="margin: auto;" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="./reMakePicture/image-solid (1).svg" class="d-block w-100"
                                        style="margin: auto;" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="my-3 m-auto" style="width:400px;">
                            <a class="btn btn-primary text-decoration-none text-white" href="#" target="_blank"
                                rel="noopener noreferrer">點我報名</a>
                        </div>
    
                    </div>
    
                </div>
            </div>
    
            <!-- 報名資訊 -->
            <div class="col-xxl-7 col d-block text-start m-auto px-xxl-3" style="max-width: 50vw;">
                <div class="px-3 pb-0" style="max-width: 30rem;">
                    <p class="" style="font-size: 0.8rem;">
                        月光灑落大地，映照著一群在夜空中舞動的精靈，宛如星際間的舞者，穿梭於無垠宇宙的深邃之中。牠們並非凡塵中的舞者，而是宇宙中的星辰，為了在無盡的星空舞會中脫穎而出，盡情展示自我。這些舞者，身姿輕盈，羽翼如同夜空中最璀璨的星辰，輝映著月光的倒影。
                    </p>
                </div>
                <div class="px-3 pb-0" style="max-width: 30rem;">
                    <h5 class="text-warning fw-bolder">活動資訊:</h5>
                    <p class="" style="font-size: 0.8rem;">主題：夜間探索。<br>
    
                        時間：場次一7/30(日)XXXX~XXXX<br>
    
                        場次二8/20(日)XXXX~XXXX<br>
    
                        地點：XXXX潮間帶 (報名成功後將於行前通知內註記集合位置)<br>
    
                        講師：XX老師<br>
    
                        開課人數：12人 (或孩童人數達8人即滿班)
                    </p>
                </div>
                <div class="px-3 pb-0" style="max-width: 30rem;">
                    <h5 class="text-warning fw-bolder">注意事項:</h5>
                    <p class="" style="font-size: 0.8rem;">建議攜帶物品：個人補充體力之點心、飲用水、雨具。<br>
    
                        為防蚊蟲叮咬，建議備薄外套、長褲、包鞋。<br>
    
                        照明燈具及紅色玻璃紙會由講師準備，請於活動結束後歸還。<br>
    
                        集合處路旁白線可停車(步行約10min)。<br>
    
                        因場地、天候狀況…等因素，授課老師保有調整活動之權利。</p>
                </div>
                <div class="px-3 pb-0" style="max-width: 30rem;">
                    <h5 class="text-warning fw-bolder">費用說明:</h5>
                    <p class="" style="font-size: 0.8rem;">
                        方案一：單人報名$400 (孩童報名須有成人報名陪同參與)<br>
    
                        方案二：兩大一小優惠$1000 <br>(第二位大人優惠價無法與全報優惠同時使用)<br>
    
                        (三歲以下孩童隨行僅收保險費)
                    </p>
                </div>
            </div>
    
        </div>
    </div>`,

  contactUs: `<div class="container">
        <div class="row">
            <div class="col">
    
                <div class="">
                    <table class="">
                        <caption style="caption-side: top;">
                            <h3 class="fw-bold">聯絡資訊</h3>
                        </caption>
                        <tr class="border-bottom ">
                            <th class="">聯絡人：</th>
                            <th class="">宇宙老師</th>
                        </tr>
                        <tr class="border-bottom ">
                            <th>Email:</th>
                            <th>ExploringTheUniverse25@XXXXXmail.com</th>
                        </tr>
                        <tr class="border-bottom ">
                            <th>Tel:</th>
                            <th>09XX-XXX-XXX</th>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="community-web">
                <a target="_blank" href="#"><img src="./reMakePicture/square-facebook-brands.svg"
                        alt="FBicon" class="my-2" style="width: 50px;"></a>
            </div>
            <iframe src="https://calendar.google.com/calendar/embed?src=bboynoice%40gmail.com&ctz=Asia%2FTaipei" class="mt-2" style="border:0; width:800px; max-width:800px; height:500px;
                                    frameborder:0; scrolling:no;"></iframe>
        </div>
    </div>`,
  classPhoto: `<div class="container-fluid text-center pe-0 mx-0">
        <h1 class="my-3">Exploring Photo</h1>
        <div class="row m-auto ">
            <div class="col col-12 d-flex flex-wrap justify-content-start justify-content-md-center" style="padding: 0;">
                <div class="photo_item col col-xl-3 col-md-4 col-sm-12 text-start mx-md-4"
                    style="position: relative; z-index: 0; margin: 0 5px 5px; max-width: 300px;">
                    <div>
                        <img src="./reMakePicture/image-solid.svg"
                            alt="" class="classPhoto"
                            style="width: 100%; border-radius: 10px; position: relative; z-index: 0;">
    
                    </div>
                    <h4 style="margin-top: 15px;">✨Photo✨</h4>
                    <p style="padding-right: 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odio, facilis rem cumque iure provident tempore temporibus laudantium impedit sit.
                    </p>
                </div>
                <!-- 下一個Photo Item -->
                <div class="photo_item col col-xl-3 col-md-4 col-sm-12 text-start mx-md-4"
                    style="position: relative; z-index: 0; margin: 0 5px 5px; max-width: 300px;">
                    <div>
                        <img src="./reMakePicture/image-solid.svg" alt="" class="classPhoto"
                            style="width: 100%; border-radius: 10px; position: relative; z-index: 0;">
                
                    </div>
                    <h4 style="margin-top: 15px;">✨Photo✨</h4>
                    <p style="padding-right: 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odio, facilis rem
                        cumque iure provident tempore temporibus laudantium impedit sit.
                    </p>
                </div>
                <!-- 下一個Photo Item -->
                <div class="photo_item col col-xl-3 col-md-4 col-sm-12 text-start mx-md-4"
                    style="position: relative; z-index: 0; margin: 0 5px 5px; max-width: 300px;">
                    <div>
                        <img src="./reMakePicture/image-solid.svg" alt="" class="classPhoto"
                            style="width: 100%; border-radius: 10px; position: relative; z-index: 0;">
                
                    </div>
                    <h4 style="margin-top: 15px;">✨Photo✨</h4>
                    <p style="padding-right: 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odio, facilis rem
                        cumque iure provident tempore temporibus laudantium impedit sit.
                    </p>
                </div>
                <!-- 下一個Photo Item -->
                <div class="photo_item col col-xl-3 col-md-4 col-sm-12 text-start mx-md-4"
                    style="position: relative; z-index: 0; margin: 0 5px 5px; max-width: 300px;">
                    <div>
                        <img src="./reMakePicture/image-solid.svg" alt="" class="classPhoto"
                            style="width: 100%; border-radius: 10px; position: relative; z-index: 0;">
                
                    </div>
                    <h4 style="margin-top: 15px;">✨Photo✨</h4>
                    <p style="padding-right: 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odio, facilis rem
                        cumque iure provident tempore temporibus laudantium impedit sit.
                    </p>
                </div>
                <!-- 下一個Photo Item -->
                <div class="photo_item col col-xl-3 col-md-4 col-sm-12 text-start mx-md-4"
                    style="position: relative; z-index: 0; margin: 0 5px 5px; max-width: 300px;">
                    <div>
                        <img src="./reMakePicture/image-solid.svg" alt="" class="classPhoto"
                            style="width: 100%; border-radius: 10px; position: relative; z-index: 0;">
                
                    </div>
                    <h4 style="margin-top: 15px;">✨Photo✨</h4>
                    <p style="padding-right: 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odio, facilis rem
                        cumque iure provident tempore temporibus laudantium impedit sit.
                    </p>
                </div>
                <!-- 下一個Photo Item -->
                <div class="photo_item col col-xl-3 col-md-4 col-sm-12 text-start mx-md-4"
                    style="position: relative; z-index: 0; margin: 0 5px 5px; max-width: 300px;">
                    <div>
                        <img src="./reMakePicture/image-solid.svg" alt="" class="classPhoto"
                            style="width: 100%; border-radius: 10px; position: relative; z-index: 0;">
                
                    </div>
                    <h4 style="margin-top: 15px;">✨Photo✨</h4>
                    <p style="padding-right: 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odio, facilis rem
                        cumque iure provident tempore temporibus laudantium impedit sit.
                    </p>
                </div>
                <!-- 下一個Photo Item -->
                <div class="photo_item col col-xl-3 col-md-4 col-sm-12 text-start mx-md-4"
                    style="position: relative; z-index: 0; margin: 0 5px 5px; max-width: 300px;">
                    <div>
                        <img src="./reMakePicture/image-solid.svg" alt="" class="classPhoto"
                            style="width: 100%; border-radius: 10px; position: relative; z-index: 0;">
                
                    </div>
                    <h4 style="margin-top: 15px;">✨Photo✨</h4>
                    <p style="padding-right: 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odio, facilis rem
                        cumque iure provident tempore temporibus laudantium impedit sit.
                    </p>
                </div>
                <!-- 下一個Photo Item -->
                <div class="photo_item col col-xl-3 col-md-4 col-sm-12 text-start mx-md-4"
                    style="position: relative; z-index: 0; margin: 0 5px 5px; max-width: 300px;">
                    <div>
                        <img src="./reMakePicture/image-solid.svg" alt="" class="classPhoto"
                            style="width: 100%; border-radius: 10px; position: relative; z-index: 0;">
                
                    </div>
                    <h4 style="margin-top: 15px;">✨Photo✨</h4>
                    <p style="padding-right: 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odio, facilis rem
                        cumque iure provident tempore temporibus laudantium impedit sit.
                    </p>
                </div>
                <!-- 下一個Photo Item -->
                <div class="photo_item col col-xl-3 col-md-4 col-sm-12 text-start mx-md-4"
                    style="position: relative; z-index: 0; margin: 0 5px 5px; max-width: 300px;">
                    <div>
                        <img src="./reMakePicture/image-solid.svg" alt="" class="classPhoto"
                            style="width: 100%; border-radius: 10px; position: relative; z-index: 0;">
                
                    </div>
                    <h4 style="margin-top: 15px;">✨Photo✨</h4>
                    <p style="padding-right: 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odio, facilis rem
                        cumque iure provident tempore temporibus laudantium impedit sit.
                    </p>
                </div>
                <!-- 下一個Photo Item -->
                <div class="photo_item col col-xl-3 col-md-4 col-sm-12 text-start mx-md-4"
                    style="position: relative; z-index: 0; margin: 0 5px 5px; max-width: 300px;">
                    <div>
                        <img src="./reMakePicture/image-solid.svg" alt="" class="classPhoto"
                            style="width: 100%; border-radius: 10px; position: relative; z-index: 0;">
                
                    </div>
                    <h4 style="margin-top: 15px;">✨Photo✨</h4>
                    <p style="padding-right: 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odio, facilis rem
                        cumque iure provident tempore temporibus laudantium impedit sit.
                    </p>
                </div>
                <!-- 下一個Photo Item -->
                <div class="photo_item col col-xl-3 col-md-4 col-sm-12 text-start mx-md-4"
                    style="position: relative; z-index: 0; margin: 0 5px 5px; max-width: 300px;">
                    <div>
                        <img src="./reMakePicture/image-solid.svg" alt="" class="classPhoto"
                            style="width: 100%; border-radius: 10px; position: relative; z-index: 0;">
                
                    </div>
                    <h4 style="margin-top: 15px;">✨Photo✨</h4>
                    <p style="padding-right: 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odio, facilis rem
                        cumque iure provident tempore temporibus laudantium impedit sit.
                    </p>
                </div>
                <!-- 下一個Photo Item -->
                <div class="photo_item col col-xl-3 col-md-4 col-sm-12 text-start mx-md-4"
                    style="position: relative; z-index: 0; margin: 0 5px 5px; max-width: 300px;">
                    <div>
                        <img src="./reMakePicture/image-solid.svg" alt="" class="classPhoto"
                            style="width: 100%; border-radius: 10px; position: relative; z-index: 0;">
                
                    </div>
                    <h4 style="margin-top: 15px;">✨Photo✨</h4>
                    <p style="padding-right: 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odio, facilis rem
                        cumque iure provident tempore temporibus laudantium impedit sit.
                    </p>
                </div>
                <!-- 下一個Photo Item -->
                <div class="photo_item col col-xl-3 col-md-4 col-sm-12 text-start mx-md-4"
                    style="position: relative; z-index: 0; margin: 0 5px 5px; max-width: 300px;">
                    <div>
                        <img src="./reMakePicture/image-solid.svg" alt="" class="classPhoto"
                            style="width: 100%; border-radius: 10px; position: relative; z-index: 0;">
                
                    </div>
                    <h4 style="margin-top: 15px;">✨Photo✨</h4>
                    <p style="padding-right: 20px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odio, facilis rem
                        cumque iure provident tempore temporibus laudantium impedit sit.
                    </p>
                </div>
                <!-- 下一個Photo Item -->
                 
    
                
    
    
    
            </div>
    
        </div>
    
    </div>`,
};

// 切換內容
function loadPage(page) {
  console.log("Fn 執行中");
  const html = pages[page] || "<p>此頁面不存在</p>";
  document.getElementById("main-content").innerHTML = html;
}
