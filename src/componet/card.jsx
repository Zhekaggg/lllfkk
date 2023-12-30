import React, { useState, useEffect } from "react";
import Lokati from "./lokation";
import FuterOk from "./futor";
import { Button } from "@mui/material";
import Da from './imger/геморой.png'
import Pg from './imger/уххбля.png'
import Do from './imger/dEZnEuw5HzU.jpg'
import Ds from './imger/запор.png'
import De from './imger/16jan2.jpg'
import Lo from './imger/эхэхэ.jpeg'
import At from './imger/maxresdefault.jpg'
import Aq from './imger/4-009.jpg'
import Aw from './imger/ap.jpg'
import Ae from './imger/XXL.png'
const Popka = () => {
    const [showMore, setShowMore] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div class="card">
          <div className="pap">
         
                  <div className="card1">
                      <div class="card-image"><img className="oda"src={Da} /></div>
                        <div class="category">Техническое обслуживание</div>
                      <div class="heading">  ремонт и эксплуатация автомобильного транспорта</div>
                  </div>
                  
                  <div class="card2">
                      <div class="card-image"><img className="oda" src={Pg} /></div>
                        <div class="category"> Менеджмент </div>
                      <div class="heading"> по отраслям и областям применения
                    </div>
                    
                  </div>
                  <div class="card3">
                      <div class="card-image"><img src={Do} className="oda"/></div>
                        <div class="category"> Радеотехника </div>
                      <div class="heading"> Электроника и телекамуникация
                    </div>
                  </div>
                  
                  <div class="card4">
                      <div class="card-image"><img src={Ds} className="oda"/></div>
                        <div class="category">Програмное обеспечение</div>
                      <div class="heading"> По видом
                    </div>
                  </div>

                  {(showMore || !isMobile) && (
            <>
                  <div class="card5">
                      <div class="card-image"><img src={De} className="oda"/></div>
                        <div class="category">Cтроительство </div>
                      <div class="heading">и эксплуатация зданий и сооружений
                    </div>
                  </div>
                  
                  <div class="card6">
                      <div class="card-image"><img src={Lo} className="oda"/></div>
                        <div class="category">Монтаж и эксплуатация</div>
                      <div class="heading"> оборудования и систем газоснабжения
                    </div>
                  </div>
                  <div class="card7">
                      <div class="card-image"><img src={At} className="oda"/></div>
                        <div class="category">Технология переработки</div>
                      <div class="heading">нефти и газа
                    </div>
                  </div>
                  <div class="card8">
                      <div class="card-image"><img src={Aq} className="oda"/></div>
                        <div class="category">Эксплуатация нефтяных </div>
                      <div class="heading">и газовых месторождения
                    </div>
                  </div>
                  <div class="card9">
                      <div class="card-image"><img src={Aw} className="oda"/></div>
                        <div class="category">Учет и аудит </div>
                      <div class="heading">
                    </div>
                  </div>
                  <div class="card10">
                      <div class="card-image"><img src={Ae} className="oda"/></div>
                        <div class="category">Стандартизация </div>
                      <div class="heading"> метрология и сертификация
                    </div>
                  </div>
                  
                  </>
                  
          )}
           
          </div>{isMobile && (
                    <Button variant="outlined" className="defc" onClick={handleShowMore}>
                        {showMore ? "Скрыть" : "Ещё"}
                    </Button>
                )}
         <Lokati/>
        <FuterOk/>
        </div>
        
    )
}

export default Popka