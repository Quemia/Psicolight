import React from "react";

const Home = () => {
  return (
    <>
      <div>tarefas diárias</div>
      <div className="card">
        <div>
          <div>
            <p>Leitura</p>
            <h3>O Milagre da manhã</h3>
            <p>30min durante 15 dias</p>
          </div>
          <div>
            <p>12%</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div>
          <div>
            <p>Meditação</p>
            <h3>Respiração</h3>
            <p>5min de meditação</p>
          </div>
          <div>
            <p>100%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
