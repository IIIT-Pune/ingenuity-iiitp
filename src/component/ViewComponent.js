import React, { Component } from 'react';
import '../css/ViewComponent.css';
import { data } from '../shared/source';
import { Link } from 'react-router-dom';

class Editorial extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var list = data.filter((item) => item.type == this.props.type);
    var firstitem = () => {
      return list[0];
    };

    var otheritem = list.slice(1);
    return (
      <div>
        <div id='header' class='container category-header'>
          <div class='row'>
            <div
              class='col-md-8 tinted cover-image center-fill-container'
              style={{ margin: '70px 0' }}
            >
              <div class='img-container'>
                <img
                  class='center-both img-center-fill tall'
                  src={firstitem().image}
                  alt=''
                />
              </div>
            </div>

            <div class='col-md-4 cover-details'>
              <div class='cover-title'>
                <Link
                  to={`${firstitem().type}/${firstitem().id}`}
                  className='cover-link'
                >
                  <h1 class='title'>{firstitem().title}</h1>
                </Link>
              </div>
              <div class='date'>{firstitem().date}</div>
              <div class='cover-excerpt'>{firstitem().description}</div>
            </div>
          </div>
        </div>

        <section class='blog-list px-3 py-5 p-md-5'>
          <div class='container'>
            {otheritem.map((item) => (
              <div class='item mb-5'>
                <div class='media'>
                  <img
                    class='mr-3 img-fluid post-thumb d-none d-md-flex'
                    src={item.image}
                    alt='website template image'
                  />
                  <div class='media-body'>
                    <h3 class='title mb-1'>
                      <a href='pages/blog-post.php'>{item.title}</a>
                    </h3>

                    <div class='intro'>{item.description}</div>
                    <a class='more-link' href='pages/blog-post.php'>
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {/* <nav class='blog-nav nav nav-justified my-5'>
              <Link
                class='nav-link-prev nav-item nav-link d-none rounded-left'
                href='https://www.free-css.com/free-css-templates'
              >
                Previous<i class='arrow-prev fas fa-long-arrow-alt-left'></i>
              </Link>{' '}
              <Link
                class='nav-link-next nav-item nav-link rounded'
                href='pages/blog-list.php'
              >
                Next<i class='arrow-next fas fa-long-arrow-alt-right'></i>
              </Link>
            </nav> */}
          </div>
        </section>
      </div>
    );
  }
}

export default Editorial;