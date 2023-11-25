import type { Metadata } from "next";
import "./constructor.style.scss";

export const metadata: Metadata = {
  title: "Конструктор",
  description: "",
};

export default function Constructor() {
  return (
    <section id="constructor">
      <div id="tools">
        <div id="searchConstr">
          {/* Временный див вместо поиска */}
          {/* <div id="search">Поиск</div> */}
          
          <input type="search" id="searchComp" name="q" placeholder="Поиск..." />
        </div>

        <div id="componentConstr">
          <div id="kitComponents">
            <div className="kitsGroupName">
              <div className="groupsName">
                <h5>ТЕКСТ</h5>
              </div>

              <div className="groupsComponents">
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>

                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
              </div>
            </div>
            
            <div className="kitsGroupName">
              <div className="groupsName">
                <h5>ТЕКСТ</h5>
              </div>

              <div className="groupsComponents">
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>

                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
              </div>
            </div>
            <div className="kitsGroupName">
              <div className="groupsName">
                <h5>ТЕКСТ</h5>
              </div>

              <div className="groupsComponents">
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>

                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
                <div className="cardComp">
                  <img src="/crdCompN.png" alt="" />
                  <p>Заголовок</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="buttonsConstr">
          <div className="btnPls">
            <button>Публиковать</button>
            <button>В черновик</button>
          </div>
          <div className="btnPls">
            <button>PDF</button>
            <button>Word</button>
          </div>
        </div>
      </div>
      <div id="constrArea">
        <div id="constrZone"></div>
      </div>
    </section>
  );
}
