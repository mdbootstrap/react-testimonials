![MDB Logo](https://mdbootstrap.com/img/Marketing/general/logo/medium/mdb-react.png)

# MDB React 5

Responsive React Testimonials / Reviews templates built with Bootstrap 5. Testimonial page and section templates with stars, images, background images, cards & more.

Check out [React Testimonials / Reviews Documentation](https://mdbootstrap.com/docs/react/extended/testimonials) for detailed instructions & even more examples.

## Basic example
![Basic example](https://user-images.githubusercontent.com/108793661/186661711-4db57ac8-9e54-4bb2-b02d-cfb2db29be4a.png)
```js
import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3">Maria Smantha</h5>
          <h6 className="text-primary mb-3">Web Developer</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon
                fas
                icon="star-half-alt"
                size="sm"
                className="text-warning"
              />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3">Lisa Cudrow</h5>
          <h6 className="text-primary mb-3">Graphic Designer</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid commodi.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3">John Smith</h5>
          <h6 className="text-primary mb-3">Marketing Specialist</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon far icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
```

## How to use?

1. Download MDB 5 - FREE REACT UI KIT

2. Choose your favourite customized component and click on the image

3. Copy & paste the code into your MDB project

[▶️ Subscribe to YouTube channel for web development tutorials & resources](https://www.youtube.com/MDBootstrap?sub_confirmation=1)


## More examples (click on the image to see a live demo)
### Testimonials section with background image:
[![React Testimonials #1](https://user-images.githubusercontent.com/108793661/186661932-126f094d-4a6f-4a78-a517-750b2c81755e.png)](https://mdbootstrap.com/docs/react/extended/testimonials#section-2)

### Small testimonials carousel:
[![React Testimonials #2](https://user-images.githubusercontent.com/108793661/186662843-cdf4ee9c-5149-4d7c-b616-afe88d41300e.png)](https://mdbootstrap.com/docs/react/extended/testimonials#section-3)

### Review cards:
[![React Testimonials #3](https://user-images.githubusercontent.com/108793661/186662946-32250d25-376b-4cf3-a824-bb1bc24a8363.png)](https://mdbootstrap.com/docs/react/extended/testimonials#section-4)

### Testimonials with gradient background:
[![React Testimonials #4](https://user-images.githubusercontent.com/108793661/186663061-c2280cdd-03ca-4f42-9011-7a86bd93672f.png)](https://mdbootstrap.com/docs/react/extended/testimonials#section-5)

You can find other examples [here](https://mdbootstrap.com/docs/react/extended/square-buttons).

<hr />

## More extended React documentation
<ul>
<li><a href="https://mdbootstrap.com/docs/react/extended/code/">React Bootstrap Code</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/gallery/">React Bootstrap Gallery</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/hamburger-menu/">React Bootstrap Hamburger Menu</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/jumbotron/">React Bootstrap Jumbotron</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/maps/">React Bootstrap Maps</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/mega-menu//">React Bootstrap Mega Menu</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/media-object/">React Bootstrap Media object</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/multiselect/">React Bootstrap Multiselect</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/masonry/">React Bootstrap Masonry</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/contact/">React Bootstrap Contact form</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/gradients/">React Bootstrap Gradients</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/pagination/">React Bootstrap Pagination</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/panels/">React Bootstrap Panels</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/social-media/">React Bootstrap Social Media icons & buttons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/search/">React Bootstrap Search</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-sort/">React Bootstrap Table sort</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-responsive/">React Bootstrap Table responsive</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-scroll/">React Bootstrap Table scroll</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-search/">React Bootstrap Table search</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/textarea/">React Bootstrap Textarea</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/sidebar/">React Bootstrap Sidebar</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/profiles/">React Bootstrap Profiles</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/dropdown-multilevel/">React Bootstrap Nested Dropdown</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/bootstrap-address-form/">React Bootstrap Address Form</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/back-to-top">React Scroll Back to Top button</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/product-cards">React Product Cards</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/avatar">React Avatar</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/carousel-with-thumbnails">React Carousel Slider with Thumbnails</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/chat">React Chat</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/comparison-table">React Comparison table</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/comments">React Comments</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/drawer">React Drawer</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/faq">React FAQ component / section</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/invoice">React Invoice</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/news-feed">React News feed</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/offcanvas">React Offcanvas</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/order-details">React Order details</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/page-transitions">React Page transitions</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/quotes">React Quotes</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/payment-forms">React Payment forms</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/select-with-custom-input">React Select with custom Input</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/square-buttons">React Square Buttons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/testimonial-slider">React Testimonial Slider</a></li>
</ul>


