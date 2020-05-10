import React from "react";

const Dashboard = () => {
  return (
    <section id="dashboard">
      <header>
        <div className="logo">
          <i className="fas fa-search"></i>
        </div>
        <div className="header-menu">
          <a href="#">Dasboard</a>
          <a href="#">Console</a>
          <a href="#">Tasks</a>
        </div>
        <div className="menu-btn">
          <i className="far fa-bell"></i>
          <div className="avatar" />
        </div>
      </header>
      <div className="welcome-section">
        <div className="img" />
        <div className="content">
          <h2>Good morning, Mackenzie.</h2>
          <p>Coffee? Check. It's time to take on the day.</p>
        </div>
      </div>
      <div className="content-section">
        <div className="content-box">
        <div className="box grid1">
        <div className="title-box">
              <div className="logo">
              <i class="fas fa-briefcase">
                  <div className="bluecircle" />
              </i>
                <h4>Projects</h4>
              </div>
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="content-area">
              <h3>5 new inquires</h3>
              <p>Gomez & Co design</p>
              <p>Harrison Logo design</p>
              <div className="expand-btn">VIEW ALL</div>
              <h3>10 projects with new activity</h3>
              <div className="items">
                <p>Carson brand design</p>
                <i class="far fa-comment-dots"></i>
              </div>
              <div className="items">
                <p>Cline social suite</p>
                <i class="far fa-comment-dots"></i>
              </div>
              <div className="items">
                <p>Lyle website mock-up</p>
                <i class="far fa-edit"></i>
              </div>
              <div className="expand-btn">VIEW ALL</div>
            </div>
          </div>
          <div className="box grid2">
            <div className="title-box">
              <div className="logo">
                <i className="fas fa-wallet">
                <div className="bluecircle" />
                </i>
                <h4>Invoices</h4>
              </div>
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="content-area">
              <p><span>2</span> payments overdue</p>
              <p><span>4</span> payments paid in the last week</p>
            </div>
          </div>
          <div className="box grid3">
            <div className="title-box">
              <div className="logo">
              <i class="fas fa-tasks">
              <div className="bluecircle" />
              </i>
                <h4>Tasks</h4>
              </div>
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="content-area">
              <p><span>1</span> task due today</p>
              <p><span>5</span> total tasks</p>
            </div>
          </div>
          <div className="box grid4">
            <div className="title-box">
              <div className="logo">
              <i class="far fa-calendar-alt">
              <div className="bluecircle" />
              </i>
                <h4>Calendar</h4>
              </div>
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="content-area">
              <p><span>2</span> scheduled events today</p>
              <p><span>10</span> scheduled events this week</p>
            </div>
          </div>
          <div className="box grid5">
            <div className="title-box">
              <div className="logo">
              <i class="fas fa-chart-line">
              <div className="bluecircle" />
              </i>
                <h4>Reports</h4>
              </div>
              <i class="fas fa-chevron-right"></i>
            </div>
            <div className="content-area">
              <p>Top lead source: <span>Google</span></p>
              <p>Value of bookings this year <span>$26</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;


/*
<div className="box1">
            <div className="title-box">
              <div className="logo"></div>
              <h4>Projects</h4>
              <div className="right-arrow"></div>
            </div>
            <div className="content-area">
              <h3>5 new inquires</h3>
              <p>Gomez & Co design</p>
              <p>Harrison Logo design</p>
              <div className="expand-btn">VIEW ALL</div>
              <h3>10 projects with new activity</h3>
              <div className="item 1">
                <p>Carson brand design</p>
                <div>Logo</div>
              </div>
              <div className="item 2">
                <p>Cline social suite</p>
                <div>Logo</div>
              </div>
              <div className="item 3">
                <p>Lyle website mock-up</p>
                <div>Logo</div>
              </div>
              <div className="expand-btn">VIEW ALL</div>
            </div>
          </div>
*/
