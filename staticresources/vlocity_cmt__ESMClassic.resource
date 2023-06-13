.b2b-cart-summary-information{
    background-color: white;
    border-radius: 0 0 4px 4px;
}

.b2b-cart-summary-tabs{
    background-color: white;
    padding: 0 1rem;
    padding-left: 1.5rem;
    border-bottom: 2px solid #DDDDDD;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.b2b-data-table-wrapper{
    background-color: white;
    color: #444444;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

.b2b-categories-list {
    background-color: #fff;
  }
  
  .b2b-categories-list_nav {
    width: 100%;
    transition: all 0.25s ease-in;
  }
  
  .b2b-categories-list_nav .b2b-product-title {
    padding: 1rem 0 0.5rem 1.2rem;
    color: #000;
    font-size: 0.9rem;
  }
  
  .b2b-categories-list_nav .b2b-promotion-title {
    padding: 0.5rem 0 1rem 1.2rem;
    color: #000;
    font-size: 0.9rem;
  }
  
  .b2b-categories-list_nav .b2b-promotion-title:hover {
    background: #1b96ff;
    color: #fff;
  }
  
  .b2b-categories-list_nav .b2b-promotion-title.selected {
    background: #1b96ff;
    color: #fff;
  }
  
  .b2b-categories-list_nav .b2b-category-name {
    padding: 0.5rem 1rem 0.5rem 1.25rem;
    color: #000;
    transition: all 0.25s ease-in;
    display: block;
    font-size: 0.8rem;
    cursor: pointer;
  }
  
  .b2b-categories-list_nav .b2b-category-name .b2b-switch-icon {
    float: right;
    transition: all 0.25s ease-in;
  }
  
  .b2b-categories-list_nav .b2b-category-name:hover {
    background: #1b96ff;
    color: #fff;
  }
  
  .b2b-categories-list_nav .b2b-category-name.selected {
    background: #1b96ff;
    color: #fff;
  }
  
  .b2b-categories-list_nav .b2b-category-name.b2b-category-name_label {
    font-size: 0.9rem;
    transition: all 0.25s ease-in;
  }
  
  .b2b-categories-list_nav .b2b-category-name.b2b-category-name_label .b2b-category-icon {
    margin-left: -2rem;
    position: absolute;
  }
  
  .b2b-categories-list_nav .b2b-category_group-list {
    height: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
  }
  
  .b2b-categories-list_nav .b2b-categories-list_nav-list input[type=checkbox] {
    display: none;
  }
  
  .b2b-categories-list_nav .b2b-categories-list_nav-list input[type=checkbox]:checked + label + ul {
    max-height: 62rem;
  }
  
  .b2b-categories-list_nav .b2b-categories-list_nav-list input[type=checkbox]:checked + label > .b2b-switch-icon {
    transform: rotate(90deg);
    transition: all 0.3s ease-in;
  }
  
  .b2b-promotions-list-header {
    font-weight: 700;
    font-size: 1.5em;
    margin-top: 2rem;
  }
  
  .b2b-promotions-list-item {
    padding: 1rem;
    margin: 1rem 0;
  }
  
  .b2b-promo-item {
    background-color: #fff;
    max-width: 21rem;
    min-width: 21rem;
    min-height: 10rem;
    max-height: 10rem;
    border-radius: 0.3rem;
    border: 1px solid #F6F6F6;
    padding: 0.8rem;
    margin-bottom: 0.7rem;
    position: relative;
    cursor: pointer;
  }
  
  .b2b-promo-item.b2b-loading {
    pointer-events: none;
  }
  
  .b2b-promo-item .b2b-promo-name {
    color: #000;
    font-size: 0.9rem;
  }
  
  .b2b-promo-item .b2b-promo-description {
    font-weight: 0.8rem;
    color: #000;
    font-size: 0.75rem;
    margin-top: 0.3rem;
    overflow: hidden;
    position: relative;
    line-height: 1rem;
    max-height: 2rem;
    margin-right: -1em;
    padding-right: 1em;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }
  
  .b2b-promo-item .b2b-promo-period {
    font-size: 0.8125rem;
    margin-top: 1rem;
    font-weight: 400;
  }
  
  .b2b-promo-item .b2b-promo-icon {
    position: absolute;
    margin-left: -1.6rem;
  }
  
  .b2b-promo-item:hover {
    background-color: #f3f9fe;
  }
  
  .b2b-promo-item:hover .b2b-promo-description {
    overflow: hidden;
    position: relative;
    line-height: 1rem;
    max-height: 2rem;
    margin-right: -1em;
    padding-right: 1em;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-promo-item {
      margin-right: 0.7rem;
    }
  }
  .b2b-product-item {
    background-color: #fff;
    max-width: 21.5rem;
    min-width: 21.5rem;
    min-height: 10rem;
    border-radius: 0.35rem;
    border: 1px solid #c9c9c9;
    padding: 0.5rem;
    margin: 0.5rem 0 0.7rem 0.5rem;
    box-shadow: 0px 3px 5px 0px #ecebea;
    position: relative;
  }
  
  .b2b-product-item.b2b-hide {
    background: #e5e5e5;
    pointer-events: none;
  }
  
  .b2b-product-item.b2b-hide .b2b-product-item_container {
    background: #e5e5e5;
    pointer-events: none;
    border: none;
  }
  
  .b2b-product-item.b2b-hide .b2b-product-item_container .b2b-product-description:after {
    background: #e5e5e5;
  }
  
  .b2b-product-item.b2b-hide .b2b-product-item_container:hover, .b2b-product-item.b2b-hide .b2b-product-item_container:focus {
    border: none;
    background-color: #e5e5e5;
  }
  
  .b2b-product-item.b2b-hide .b2b-product-item_container:hover .b2b-product-description, .b2b-product-item.b2b-hide .b2b-product-item_container:focus .b2b-product-description {
    overflow: hidden;
    position: relative;
    line-height: 1rem;
    max-height: 2rem;
    margin-right: -1em;
    padding-right: 1em;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }
  
  .b2b-product-item.b2b-loading {
    pointer-events: none;
  }
  
  .b2b-product-item .b2b-product-item_container {
    border: 1px solid #fff;
    border-radius: 0.3rem;
    width: 100%;
    height: 100%;
    padding: 0.8rem;
    min-height: 9rem;
    cursor: pointer;
  }
  
  .b2b-product-item .b2b-product-item_container .b2b-product-name {
    font-size: 1rem;
    color: #000;
  }
  
  .b2b-product-item .b2b-product-item_container .b2b-product-description {
    font-weight: 300;
    margin-top: 0.3rem;
    font-size: 0.75rem;
    margin-bottom: 1.25rem;
    color: #666666;
    overflow: hidden;
    position: relative;
    line-height: 1rem;
    max-height: 2rem;
    margin-right: -1em;
    padding-right: 1em;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }
  
  .b2b-product-item .b2b-product-item_container .b2b-product-error-message {
    font-weight: 300;
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: #fc9696;
    overflow: hidden;
    position: relative;
    line-height: 1rem;
    max-height: 2rem;
    margin-right: -1em;
    padding-right: 1em;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }
  
  .b2b-product-item .b2b-product-item_container .b2b-price_info {
    overflow: hidden;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
  }
  
  .b2b-product-item .b2b-product-item_container .b2b-price_info .b2b-each-attribute {
    margin-left: 3rem;
    font-size: 1rem;
    font-weight: 400;
  }
  
  .b2b-product-item .b2b-product-item_container .b2b-price_info .b2b-each-attribute .b2b-price-label {
    color: #706e6b;
    font-size: 0.75rem;
  }
  
  .b2b-product-item .b2b-product-item_container .b2b-attributes_info {
    overflow: hidden;
    overflow: auto;
    position: inherit;
    width: inherit;
    margin-bottom: 1.3rem;
  }
  
  .b2b-product-item .b2b-product-item_container .b2b-attributes_info .b2b-each-attribute {
    min-width: 6rem;
  }
  
  .b2b-product-item .b2b-product-item_container .b2b-attributes_info .b2b-each-attribute .b2b-attribute_label {
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.3px;
    color: #706E6B;
  }
  
  .b2b-product-item .b2b-product-item_container .b2b-attributes_info .b2b-each-attribute .b2b-attribute_value {
    font-size: 1rem;
    font-weight: bold;
  }
  
  .b2b-product-item .b2b-product-item_container .b2b-attributes_info .b2b-each-attribute {
    min-width: auto;
  }
  
  .b2b-product-item .b2b-product-item_container .b2b-attributes_info .b2b-each-attribute .b2b-attribute_label {
    margin-right: 0.3rem;
  }
  
  .b2b-product-item .b2b-product-item_container .b2b-attributes_info .b2b-each-attribute .b2b-attribute_label::after {
    content: ":";
  }
  
  .b2b-product-item .b2b-product-item_container .b2b-attributes_info .b2b-each-attribute .b2b-attribute_value {
    font-size: 0.8rem;
    font-weight: 400;
  }
  
  .b2b-product-item .b2b-product-item_container .b2b-attributes_info .b2b-each-attribute:not(:first-child):before {
    content: " . ";
    font-weight: 300;
    padding: 0 0.25rem;
  }
  
  .b2b-product-item .b2b-product-item_container:hover, .b2b-product-item .b2b-product-item_container:focus {
    border: 1px solid #0176d3;
    background-color: #f3f9fe;
  }
  
  .b2b-product-item .b2b-product-item_container:hover .b2b-product-description, .b2b-product-item .b2b-product-item_container:focus .b2b-product-description {
    overflow: hidden;
    position: relative;
    line-height: 1rem;
    max-height: 2rem;
    margin-right: -1em;
    padding-right: 1em;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }
  
  .b2b-product-item .b2b-product-item-not-allowed_container {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-product-item {
      margin-right: 0.7rem;
      min-width: 17rem;
      max-width: 17rem;
    }
  }
  @media screen and (min-width: 80rem) {
    .b2b-product-item {
      min-width: 24rem;
      max-width: 24rem;
    }
  }
  .b2b-items-grid {
    background-color: transparent;
  }
  
  .b2b-items-grid .b2b-items-grid_title {
    font-size: 1.5rem;
    font-weight: 700;
  }
  
  .b2b-items-grid .b2b-items-grid_container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  
  .b2b-offer-selection {
    padding: 0.25rem;
    width: 100%;
    margin-bottom: 5rem;
  }

  .b2b-offer-selection-discount-modal-open {
    padding: 0.25rem;
    margin-bottom: 5rem;
  }
  
  .b2b-offer-selection .b2b-items-container {
    display: -ms-flexbox;
    display: flex;
    background: #F6F6F6;
    padding: 2rem 0 6rem 6rem;
  }
  
  .b2b-offer-selection .b2b-container_items-list {
    width: 100%;
  }
  
  .b2b-offer-selection .b2b-container_categories-list {
    display: none;
    width: 0;
  }
  
  @media screen and (min-width: 80rem) {
    .b2b-offer-selection .b2b-container_items-list {
      width: 80%;
    }
  
    .b2b-offer-selection .b2b-container_categories-list {
      width: 20%;
      margin-right: 1rem;
      display: block;
    }
  }
  @media screen and (max-width: 79rem) and (min-width: 30rem) {
    .b2b-offer-selection .b2b-container_items-list {
      width: 60%;
    }
  
    .b2b-offer-selection .b2b-items-container {
      padding: 2rem 0 9rem 3rem;
    }
  
    .b2b-offer-selection .b2b-container_categories-list {
      display: block;
      margin-right: 1rem;
      width: 40%;
    }
  }
  .b2b-spinner {
    position: fixed;
  }
  
  .b2b-tabs {
    display: -ms-flexbox;
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  .b2b-tab_item {
    cursor: pointer;
    color: #706e6b;
    font-size: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid transparent;
  }
  
  .b2b-tab_item:not(:first-child) {
    margin-left: 2rem;
  }
  
  .b2b-tab_item.b2b-tab_item-active {
    color: #000;
    border-color: #1589ee;
  }
  
  .b2b-tabs_cont {
    padding: 0 1rem;
  }
  
  @media (min-width: 1024px) {
    .b2b-tabs_cont {
      position: absolute;
      left: 1rem;
      bottom: 0;
    }
  }
  .b2b-tabs_default .slds-tabs_default {
    background-color: transparent;
  }
  
  .b2b-tabs_default .slds-tabs_default__nav {
    border: 0;
  }
  
  .b2b-tabs_default .slds-tabs_default__item {
    padding: 0.5rem;
    letter-spacing: 0;
    font-size: 1rem;
    text-transform: unset;
  }
  
  .b2b-tabs_default .slds-tabs_default__item.slds-is-active {
    color: #000;
  }

  .b2b-tabs_default .slds-tabs_default__item.slds-is-active a{
   text-decoration: none;
  }
  
  .b2b-tabs_default .slds-tabs_default__item:not(:first-child) {
    margin-left: 1.5rem;
  }
  
  .b2b-button {
    white-space: nowrap;
  }
  
  button.b2b-button {
    white-space: nowrap;
  }
  
  @media (max-width: 1024px) {
    button.b2b-button {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
  .b2b-button .b2b-button_icon {
    width: 0.5rem;
    height: 0.5rem;
    margin: 0 0.25rem 0.125rem;
  }
  
  @media (max-width: 20em) {
    .b2b-icon_x-small-adj-below .b2b-button_icon {
      width: 1rem;
      height: 1rem;
    }
  }
  @media (max-width: 30em) {
    .b2b-icon_small-adj-below .b2b-button_icon {
      width: 1rem;
      height: 1rem;
    }
  }
  @media (max-width: 48em) {
    .b2b-icon_medium-adj-below .b2b-button_icon {
      width: 1rem;
      height: 1rem;
    }
  }
  @media (max-width: 64em) {
    .b2b-icon_large-adj-below .b2b-button_icon {
      width: 1rem;
      height: 1rem;
    }
  }
  @media (min-width: 20em) {
    .b2b-icon_x-small-adj-above .b2b-button_icon {
      width: 1rem;
      height: 1rem;
    }
  }
  @media (min-width: 30em) {
    .b2b-icon_small-adj-above .b2b-button_icon {
      width: 1rem;
      height: 1rem;
    }
  }
  @media (min-width: 48em) {
    .b2b-icon_medium-adj-above .b2b-button_icon {
      width: 1rem;
      height: 1rem;
    }
  }
  @media (min-width: 64em) {
    .b2b-icon_large-adj-above .b2b-button_icon {
      width: 1rem;
      height: 1rem;
    }
  }
  .b2b-dropdown_trigger {
    position: relative;
    outline: none;
  }
  
  .b2b-dropdown {
    position: absolute;
    left: 0;
    background-color: #fff;
    border: 1px solid #dddbda;
    border-radius: 0.25rem;
    cursor: pointer;
    display: none;
    z-index: 1;
  }
  
  .b2b-dropdown.b2b-dropdown_right {
    left: auto;
    right: 0;
  }
  
  .b2b-dropdown_trigger.b2b-dropdown-showdown .b2b-dropdown {
    top: 100%;
  }
  
  .b2b-dropdown_trigger.b2b-dropdown-showup .b2b-dropdown {
    bottom: 100%;
  }
  
  .b2b-dropdown_open .b2b-dropdown {
    display: block;
  }
  
  .b2b-dropdown_item {
    padding: 0.5rem;
    white-space: nowrap;
  }
  
  .b2b-dropdown_item:hover {
    background-color: #fafaf9;
  }
  
  .b2b-dropdown_item .b2b-dropdown_item-icon {
    opacity: 0;
    margin-right: 0.5rem;
  }
  
  .b2b-dropdown_item-active.b2b-dropdown_item .b2b-dropdown_item-icon {
    opacity: 1;
  }
  
  .b2b-cart-summary {
    z-index: 1;
  }
  
  .b2b-cart-summary .b2b-cart-price-text {
    font-size: 0.9rem;
    font-weight: bold;
  }
  
  .b2b-cart-summary .b2b-quote-details-wrapper {
    background: #f3f2f2;
    border: 1px solid #dddbda;
    border-radius: 4px 4px 0px 0px;
  }
  
  .b2b-stretch-y {
    height: 100%;
  }
  
  .b2b-pipe {
    position: relative;
  }
  
  .b2b-pipe::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 3rem;
    background-color: #d9dbdd;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  @media screen and (max-width: 76rem) {
    .b2b-pipe::after {
      display: none;
    }
  }
  .b2b-pipe-before {
    position: relative;
  }
  
  .b2b-pipe-before::before {
    content: "";
    position: absolute;
    width: 1px;
    height: 3rem;
    background-color: #d9dbdd;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  @media screen and (max-width: 76rem) {
    .b2b-pipe-before::before {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    .b2b-cart-actions {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      max-width: 20%;
    }
  }
  .b2b-cart-actions .b2b-m-left_medium {
    margin-left: 0.4rem;
  }
  
  .b2b-serviceability-modal .b2b-modal-checkbox {
    margin-right: 0.43rem;
  }
  
  .b2b-quote-clone-header {
    font-weight: 400;
    font-size: 1.25rem;
    text-align: center;
    color: #000;
  }
  
  .b2b-quote-clone-content {
    margin: 2.25rem 10rem;
  }
  
  .b2b-quote-clone-content .b2b-quote-clone-title {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.25rem;
    color: #000;
  }
  
  .b2b-quote-clone-content .b2b-quote-clone-input-label {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.125rem;
    color: #3e3e3c;
    margin-top: 1rem;
  }
  
  .b2b-quote-clone-content .b2b-quote-clone-input {
    background: white;
    border: 0.063rem solid #dddbda;
    border-radius: 0.25rem;
    width: 19rem;
    height: 2rem;
  }
  
  .b2b-quote-clone-content .b2b-quote-clone-option-title {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.25rem;
    color: #000;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .b2b-quote-clone-content .b2b-quote-clone-option {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
        align-items: center;
  }
  
  .b2b-quote-clone-content .b2b-quote-clone-option .b2b-quote-clone-option-text {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.25rem;
    color: #3e3e3c;
    margin-left: 0.4rem;
  }
  
  .b2b-quote-clone-footer {
    background-color: #e5e5e5;
    padding: 0.5rem;
  }
  
  .b2b-quote-clone-wrapper .slds-modal__footer {
    padding: 0;
  }
  
  .b2b-discount-panel-wrapper {
    background-color: white !important;
    border: 1px solid #c4c4c4;
  }
  
  .b2b-discount-panel-wrapper .b2b-discount-panel .b2b-discount-header {
    border-bottom: 1px solid #C4C4C4;
  }
  
  .b2b-discount-panel-wrapper .b2b-discount-panel .b2b-section-tile {
    background: #fafaf9;
    box-shadow: 0px -1px 0px #969492, 0px 1px 0px #969492;
  }
  
  .b2b-discount-panel-wrapper .b2b-discount-panel .b2b-section-tile_title {
    color: #0B0B0B;
    line-height: 1.5rem;
  }
  
  .b2b-discount-panel-wrapper .b2b-discount-panel .b2b-section-tile_pill {
    background: rgba(221, 219, 218, 0.33);
    color: #FF8A00;
    font-weight: 700;
    font-size: 0.6rem;
    line-height: 0.75rem;
    width: -webkit-fit-content;
    width: fit-content;
    padding: 0.2rem 1rem;
    border-radius: 0.6rem;
    border: 0.3px solid #C5C5C5;
  }
  
  .b2b-discount-panel-wrapper .b2b-discount-panel .b2b-section-status-icon {
    height: 1.2rem;
    width: 1.2rem;
  }
  
  .b2b-discount-panel-wrapper .b2b-discount-panel .slds-accordion__section {
    position: relative;
    margin: 0.5rem 0;
  }
  
  .b2b-discount-panel-wrapper .b2b-discount-panel .slds-accordion__summary-heading {
    font-size: 1rem;
    line-height: 1.25;
  }
  
  .b2b-discount-panel-wrapper .b2b-discount-panel .slds-accordion__content {
    max-height: 11rem;
    overflow-y: auto;
  }
  
  .b2b-discount-panel-wrapper .b2b-promo-modal_title {
    color: #0B0B0B;
  }
  
  .b2b-discount-panel-wrapper .b2b-discount-modal_title {
    color: #979797;
  }
  
  .b2b-discount-panel-wrapper .b2b-discount-promo_header {
    background: #257BCD;
    color: white;
  }
  
  .b2b-discount-panel-wrapper .b2b-discount-promo_description {
    color: #000000;
  }
  
  .b2b-modal .slds-modal__content {
    background-color: #fff;
  }
  
  .b2b-modal .slds-modal__content article {
    background-color: #fff;
    border-radius: unset;
  }
  
  @media screen and (max-width: 48rem) {
    .b2b-modal .slds-card__body--inner, .b2b-modal .slds-card__body_inner {
      padding: 0;
    }
  
    .b2b-modal .slds-modal__container {
      margin: 0;
      padding: 0;
    }
  
    .b2b-modal .slds-modal__header {
      position: absolute;
      top: 0;
      border-radius: unset;
      width: 100%;
      text-align: left;
      z-index: 20;
    }
  
    .b2b-modal .slds-text-heading_medium {
      padding-left: 2em;
    }
  
    .b2b-modal .slds-modal__content {
      margin-top: 58px;
      margin-bottom: 60px;
      width: 100%;
      height: 100%;
      padding: 0;
      overflow-y: scroll;
    }
  
    .b2b-modal .slds-modal__close {
      top: 1em;
      right: unset;
    }
  
    .b2b-modal .slds-icon {
      fill: #000;
    }
  
    .b2b-modal .slds-modal__container {
      position: relative;
      background-color: #000;
      margin: auto;
      padding: 0;
      border: 0.0625rem solid #888888;
      width: 100%;
      animation-name: slds-animatetop;
      animation-duration: 0.4s;
    }
  
    @keyframes slds-animatetop {
      from {
        top: -300px;
        opacity: 0;
      }
      to {
        top: 0;
        opacity: 1;
      }
    }
  }
  .b2b-modal .slds-card {
    border: none;
    box-shadow: none;
  }
  
  .b2b-modal .b2b-input {
    padding: 5px;
    border-radius: 0.3rem;
    border: 1px solid #d9dbdd;
  }
  
  .b2b-modal .slds-is-selected {
    background-color: #fff;
  }
  
  .b2b-modal .slds-visual-picker input:checked ~ label .slds-visual-picker__icon {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border: 1px solid #dddbda;
    border-radius: 0.25rem;
  }
  
  .b2b-modal .slds-checkbox_custom-group .slds-img-item_select-container {
    border: 1px solid #d9dbdd;
    border-radius: 0.3rem;
  }
  
  .b2b-modal .slds-checkbox_custom-group input[type=checkbox]:checked + .slds-img_select-cont .slds-img-item_select-container {
    border: 1px solid #0070d2;
    border-radius: 0.3rem;
  }
  
  @media screen and (max-width: 48rem) {
    .b2b-modal .slds-checkbox_custom-group {
      -ms-flex: 1 1 150px;
          flex: 1 1 150px;
      min-width: 150px;
    }
  
    .b2b-modal [data-omni-key=categorySelect] .slds-form-element__control {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      -ms-flex-line-pack: start;
          align-content: flex-start;
    }
  }
  .b2b-modal .slds-img-item_select-container {
    background-color: #fff;
  }
  
  .b2b-header-container {
    background-color: #fff;
    color: #000;
    position: relative;
  }
  
  .b2b-header-container .b2b-category-icon {
    border-radius: 1rem;
    vertical-align: text-bottom;
    padding: 0.125rem;
    display: inherit;
    background: #1589ee;
  }
  
  .b2b-header-title {
    font-weight: 700;
    font-size: 2rem;
    margin-top: 0.8rem;
    letter-spacing: 0.3px;
  }
  
  .nd2-b2b-nav-text {
    vertical-align: bottom;
  }
  
  .b2b-mobile-nav-icon {
    vertical-align: super;
  }
  
  .b2b-header-description {
    margin-left: 6.7rem;
  }
  
  @media screen and (max-width: 30rem) {
    .b2b-header-description {
      padding-left: 1.5rem;
    }
  }
  .b2b-header-tabs {
    position: absolute;
    bottom: 0;
    right: 6rem;
  }
  
  .b2b-header-search-container {
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    right: 2rem;
    margin-top: 1rem;
  }
  
  .b2b-header-search-container .b2b-sort-by {
    margin: 1.5rem 0 0 1rem;
    cursor: pointer;
  }
  
  .b2b-header-search-container .b2b-sort-by .b2b-sort-text {
    color: #0070d2;
  }
  
  .b2b-header-search-container .b2b-sort-by .b2b-sort-icon {
    display: inline-block;
    transition: all 0.25s ease-in;
  }
  
  .b2b-header-search-container .b2b-sort-by .b2b-sort-icon.desc {
    transform: rotate(180deg);
  }
  
  .b2b-show-more {
    position: absolute;
    bottom: 0;
    right: 0;
    background: #fff;
  }
  
  .b2b-show-more.expanded {
    position: static;
    padding: 0;
  }
  
  .b2b-show-more-text {
    white-space: nowrap;
    float: left;
  }
  
  .b2b-show-more-text.expanded {
    white-space: normal;
  }
  
  .b2b-show-more-description {
    position: relative;
    overflow: hidden;
  }
  
  .b2b-card {
    margin: 1.5rem 0 0;
    background: #fff;
  }
  
  .b2b-card.b2b-promo-spacing {
    margin: 0 0 1.5rem 0;
  }
  
  .b2b-card input.b2b-card_checkbox {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  
  .b2b-card .b2b-card_container {
    -ms-flex: 1;
        flex: 1;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab {
    width: 100%;
    color: #fff;
    transition: all 0.25s ease-in;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label {
    display: -ms-flexbox;
    display: flex;
    position: relative;
    -ms-flex-pack: justify;
        justify-content: space-between;
    padding: 1.5rem 1rem;
    background: #fff;
    font-weight: 700;
    font-size: 1.3rem;
    color: #000;
    cursor: pointer;
    transition: all 0.25s ease-in;
    /* Icon */
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-card_title {
    width: 100%;
    padding-right: 2.5rem;
    display: inherit;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-card_title .b2b-macd-action {
    padding: 0.5rem 0.75rem;
    color: #fff;
    border-radius: 1.5rem;
    background-color: green;
    font-size: 0.75rem;
    position: relative;
    top: -0.3rem;
    margin-right: 0.5rem;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-card_title .b2b-macd-action.Change {
    background-color: #706e6b;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-card_title .b2b-macd-action.Add {
    background-color: #04844b;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-card_title .b2b-macd-action.Disconnect {
    background-color: #ffb75d;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-card_title .b2b-bundle-title {
    color: #706e6b;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-card_title {
      width: 40vw;
      padding-right: 0;
      display: block;
    }
  }
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-attributes_info {
    overflow: hidden;
    position: inherit;
    width: inherit;
    margin-top: -0.5rem;
    overflow: auto;
    white-space: nowrap;
    /* Hide scrollbars */
    -ms-overflow-style: none;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-attributes_info .b2b-each-attribute {
    min-width: 6rem;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-attributes_info .b2b-each-attribute .b2b-attribute_label {
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.3px;
    color: #706E6B;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-attributes_info .b2b-each-attribute .b2b-attribute_value {
    font-size: 1rem;
    font-weight: bold;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-attributes_info::-webkit-scrollbar {
    display: none;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-attributes_info .b2b-each-attribute {
    min-width: auto;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-attributes_info .b2b-each-attribute .b2b-attribute_label {
    text-transform: uppercase;
    margin-right: 0.5rem;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-attributes_info .b2b-each-attribute .b2b-attribute_value {
    font-size: 0.8rem;
    font-weight: 700;
    margin-right: 0.5rem;
    word-break: break-word;
    white-space: break-spaces;
    -webkit-hyphens: auto;
        -ms-hyphens: auto;
            hyphens: auto;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-attributes_info .b2b-each-attribute:not(:first-child):before {
    content: " . ";
    font-weight: 300;
    padding: 0 0.25rem;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-price_info {
    overflow: hidden;
    display: -ms-flexbox;
    display: flex;
    right: 1rem;
    overflow: auto;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-price_info .b2b-each-attribute {
    min-width: 6rem;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-price_info .b2b-each-attribute .b2b-attribute_label {
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.3px;
    color: #706E6B;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-price_info .b2b-each-attribute .b2b-attribute_value {
    font-size: 1rem;
    font-weight: bold;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-price_info .b2b-each-attribute .b2b-attribute_value {
    border-bottom: 1px dashed #000;
    float: right;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-price_info .b2b-each-attribute .b2b-attribute_value:focus {
    border: 1px solid #1589ee;
    border-radius: 0.25rem;
    padding: 0 0.5rem;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-price_info .b2b-each-attribute .b2b-attribute_value.b2b-no-border {
    border-bottom: none;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-price_info .b2b-each-attribute .b2b-attribute_value.b2b-adjustment-price {
    width: 100%;
    border-bottom: none;
    font-weight: 300;
    font-size: 0.7rem;
    margin-top: 0.2rem;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-quantity {
    width: 10rem;
    min-height: 2rem;
  }
  
  @media screen and (min-width: 60rem) {
    .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-quantity {
      width: 6rem;
    }
  }
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-quantity .b2b-quantity_value {
    border: 1px solid #dddbda;
    height: 1.4rem;
    width: 4.4rem;
    padding-left: 0.6rem;
    font-size: 0.9rem;
    border-radius: 0.25rem;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-quantity .b2b-quantity_value:focus {
    box-shadow: 0px 0px 3px #1589ee;
    border: 0.1rem solid #1b96ff;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-quantity .b2b-quantity_value:disabled {
    background-color: #e5e5e5;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-quantity .b2b-configure_label {
    color: #706e6b;
    font-size: 0.65rem;
    font-weight: 400;
    letter-spacing: 0.4px;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-label-container {
    display: block;
    width: 100%;
    -ms-flex-pack: justify;
        justify-content: space-between;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-label-container .b2b-child-indicator {
    position: absolute;
    top: 0;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-label-container .b2b-prod-ren-link {
    position: absolute;
    top: 2.3rem;
    right: 39rem;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-label-container .b2b-label-details {
    margin-top: 1rem;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-menu {
    position: absolute;
    right: 0.5rem;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-menu .slds-is-open .slds-dropdown_right {
    overflow: visible;
    position: relative;
    margin-top: -1.25rem;
    z-index: 1;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-menu {
      right: 0.75rem;
    }
  }
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label.b2b-disconnected {
    background-color: #e5e5e5;
    pointer-events: none;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label.b2b-disconnected .b2b-card_title .b2b-each-card_title {
    text-decoration: line-through;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label.b2b-no-chevron::after {
    content: "";
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label {
      padding: 1.5rem 3rem 1.5rem 1.5rem;
    }
  
    .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label::after {
      right: 0.5rem;
    }
  
    .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-label-container {
      display: -ms-flexbox;
      display: flex;
    }
  
    .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-label-container .b2b-label-details {
      margin-top: 0;
      padding-right: 1.5rem;
      overflow: auto;
    }
  }
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-expansion-icon {
    fill: #5c5c5c;
  }
  
  @media screen and (min-width: 30rem) {
    .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label {
      padding: 1.5rem 3rem 1rem 1.5rem;
    }
  
    .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-attributes_info {
      display: -ms-flexbox;
      display: flex;
    }
  }
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-content {
    padding: 0 1rem;
    max-height: 0;
    background: white;
    transition: all 0.35s;
    color: #595959;
    overflow: auto;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-content {
      padding: 0 1.5rem;
    }
  }
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-content.b2b-card-parent {
    padding: 0;
    background: #F6F6F6;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-content.b2b-content-disconnect {
    pointer-events: none;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab input.b2b-card_checkbox:checked + .b2b-card_tab-label .b2b-expansion-icon {
    transform: rotate(90deg);
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab input.b2b-card_checkbox:checked ~ .b2b-expand-accordion ~ .b2b-card_tab-content {
    max-height: calc(200vh - 1.3rem);
    border-top: 1px solid #d8d8d8;
  }
  
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab input.b2b-card_checkbox:checked ~ .b2b-expand-accordion ~ .b2b-card_tab-content.b2b-extra-padding {
    padding: 1rem;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab input.b2b-card_checkbox:checked ~ .b2b-expand-accordion ~ .b2b-card_tab-content.b2b-extra-padding {
      padding: 1.5rem;
    }
  }
  .b2b-card .b2b-card_container .b2b-card_tabs .b2b-card_tab .b2b-modal-cancel {
    color: #004487;
  }
  
  .b2b-card.b2b-product-group {
    background: #F6F6F6;
    margin: 0;
  }
  
  .b2b-card.b2b-product-group .b2b-card_container .b2b-card_tabs .b2b-card_tab-label {
    background: #F6F6F6;
  }
  
  .b2b-card.b2b-product-group .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-price_info .b2b-each-attribute .b2b-attribute_value {
    border-bottom: none;
  }
  
  .b2b-card.b2b-product-group .b2b-card_container .b2b-card_tabs .b2b-card_tab-label.b2b-disconnected {
    background-color: #e5e5e5;
  }
  
  .b2b-card.b2b-product-group .b2b-card_container .b2b-card_tabs .b2b-card_tab-content {
    padding: 0;
    background: #F6F6F6;
  }
  
  .b2b-card.b2b-product-group .b2b-card_container .b2b-card_tabs .b2b-card_tab input.b2b-card_checkbox:checked ~ .b2b-card_tab-content {
    padding: 0;
  }
  
  .b2b-card.b2b-child-card {
    margin: 0 0 1rem 0;
    padding: 0;
  }
  
  .b2b-card.b2b-child-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label {
    background: #fff;
    border-bottom: 1px solid #d8d8d8;
  }
  
  .b2b-card.b2b-child-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-price_info .b2b-each-attribute .b2b-attribute_value {
    border-bottom: 1px dashed #000;
  }
  
  .b2b-card.b2b-child-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-price_info .b2b-each-attribute .b2b-attribute_value:focus {
    border: 1px solid #1589ee;
    border-radius: 0.25rem;
    padding: 0 0.5rem;
  }
  
  .b2b-card.b2b-child-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-price_info .b2b-each-attribute .b2b-attribute_value.b2b-no-border {
    border-bottom: none;
  }
  
  .b2b-card.b2b-child-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label .b2b-price_info .b2b-each-attribute .b2b-attribute_value.b2b-adjustment-price {
    width: 100%;
    border-bottom: none;
    font-weight: 300;
    font-size: 0.7rem;
    margin-top: 0.2rem;
  }
  
  .b2b-card.b2b-child-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-label.b2b-disconnected {
    background-color: #e5e5e5;
  }
  
  .b2b-card.b2b-child-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-content {
    padding: 0;
    background: #fff;
  }
  
  .b2b-card.b2b-child-card .b2b-card_container .b2b-card_tabs .b2b-card_tab-content.b2b-extra-padding {
    padding: 0 1.5rem;
  }
  
  .b2b-card.b2b-child-card .b2b-card_container .b2b-card_tabs .b2b-card_tab input.b2b-card_checkbox:checked ~ .b2b-expand-accordion ~ .b2b-card_tab-content.b2b-extra-padding {
    padding: 1rem;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-card.b2b-child-card .b2b-card_container .b2b-card_tabs .b2b-card_tab input.b2b-card_checkbox:checked ~ .b2b-expand-accordion ~ .b2b-card_tab-content.b2b-extra-padding {
      padding: 1.5rem;
    }
  }
  .b2b-card.b2b-child-card.b2b-grand-child-card {
    margin-bottom: 0;
  }
  
  .b2b-child-card_path {
    background: #fff;
    padding: 0.4rem 2rem;
    margin: 2rem 2rem 0 4rem;
    border-bottom: 1px solid #d8d8d8;
  }
  
  .b2b-child-card_path .b2b-child-card_path-title {
    font-weight: 300;
    color: #1589ee;
    cursor: pointer;
    transition: all 0.35s;
  }
  
  .b2b-child-card_path .b2b-child-card_path-title:hover {
    font-weight: 700;
  }
  
  .b2b-parent-attribute-container {
    background: #fff;
    margin-bottom: 1rem;
    padding: 1rem 1.5rem;
    display: inherit;
  }
  
  .b2b-parent-attribute-container.b2b-disconnect {
    padding: 0;
  }
  
  .b2b-card-parent .b2b-parent-attribute-container .b2b-attribute-parent-padding {
    padding-left: 1.5rem;
  }
  
  .b2b-delete-offer .slds-modal__header {
    background-color: #c23934;
    color: #fff;
    font-size: 1rem;
  }
  
  .b2b-delete-offer .slds-modal__content {
    color: #000;
  }
  
  .b2b-fixmember-container .b2b-fixmember-error-message {
    background-color: #FEF1EE;
    padding: 0.5rem;
  }
  
  .b2b-fixmember-container .b2b-fixmember-error-message .b2b-fixnow-link {
    color: #C23934;
    font-weight: bolder;
  }
  
  .b2b-attribute-list {
    position: relative;
  }
  
  .b2b-attribute-list .b2b-attribute-container {
    margin-bottom: 1rem;
    -ms-flex: 0 0 100%;
        flex: 0 0 100%;
    width: 100%;
    max-width: 37rem;
    min-width: 16rem;
    /* Check Box */
    /* Matrix Table */
    /* Combo Box */
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-attribute-list .b2b-attribute-container {
      width: auto;
      margin: 0 2rem 2rem 0;
      -ms-flex: 1;
          flex: 1;
    }
  }
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_checkbox .b2b-form-element_checkbox {
    display: inline;
    margin-right: 0.3rem;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_checkbox .b2b-form-element_checkbox .slds-checkbox [type=checkbox]:checked ~ .slds-checkbox_faux {
    background: #1589ee;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_checkbox .b2b-form-element_checkbox .slds-checkbox .slds-checkbox_faux {
    margin-top: -0.188rem;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_checkbox .b2b-configure-text {
    font-size: 1rem;
    letter-spacing: 0.01rem;
    color: #595959;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_checkbox .b2b-attribute-each-row {
    margin-bottom: 0.3rem;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_matrix .b2b-config-label {
    color: #000;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: -1.375rem;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_matrix table {
    width: 98%;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_matrix td,
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_matrix th {
    padding: 0.65rem;
    padding-left: 1rem;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_matrix th {
    font-size: 0.75rem;
    text-transform: uppercase;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_matrix tr:not(:first-child) {
    border-left: 1px solid #d8d8d8;
    border-right: 1px solid #d8d8d8;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_matrix tr td {
    font-size: 1rem;
    letter-spacing: 0.0375rem;
    font-weight: 300;
    color: #595959;
    border-bottom: 1px solid #f2f2f2;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_matrix tr:nth-child(2) td {
    border-top: 1px solid #d8d8d8;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_matrix tr:last-child td {
    border-bottom: 1px solid #d8d8d8;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_matrix tr td:first-child {
    font-weight: 400;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_matrix th:first-child {
    width: 70vh;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_matrix .b2b-attribute-radio {
    margin-right: 1vw;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_matrix .b2b-attribute-radio.slds-radio [type=radio]:checked + .slds-radio__label .slds-radio_faux {
    border-color: #1589ee;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_matrix .b2b-attribute-radio.slds-radio [type=radio]:checked + .slds-radio__label .slds-radio_faux:after {
    background: #1589ee;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_matrix .b2b-attribute-radio .slds-radio_faux {
    margin-top: -0.1875rem;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox {
    margin-top: 0.9rem;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input .slds-form-container {
    padding: 0;
    margin-bottom: 0;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input .slds-input {
    border: 1px solid #dddbda;
    border-radius: 0.25rem;
    margin-bottom: 0;
    padding: 0.25rem 0.75rem;
    height: 1.875rem;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input .slds-input-has-icon_right .slds-input__icon {
    right: 0.5rem;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input .slds-input-has-icon_left .slds-input__icon {
    left: 0.5rem;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input .slds-dropdown {
    position: relative;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input input:focus ~ .slds-form-element__label,
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input input:focus + .slds-form-element__label,
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input input.slds-has-value:not(:focus):valid ~ .slds-form-element__label,
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input input.slds-has-value:not(:focus):valid + .slds-form-element__label,
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input input[cloned=dirty] ~ .slds-form-element__label,
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input input[cloned=dirty] + .slds-form-element__label,
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input input.slds-input[cloned=dirty] ~ .slds-form-element__label,
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input input.slds-input[cloned=dirty] + .slds-form-element__label,
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input input.slds-is-dirty.slds-not-empty ~ .slds-form-element__label,
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input input.slds-is-dirty.slds-not-empty + .slds-form-element__label, .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input input.ng-dirty.ng-not-empty ~ .slds-form-element__label,
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input input.ng-dirty.ng-not-empty + .slds-form-element__label,
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input input.slds-input.ng-dirty.ng-not-empty.ng-touched[vlc-slds-lookup-control] ~ .slds-form-element__label,
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input input.slds-input.ng-dirty.ng-not-empty.ng-touched[vlc-slds-lookup-control] + .slds-form-element__label,
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input input.ng-touched.ng-not-empty.td-input ~ .slds-form-element__label,
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-input input.ng-touched.ng-not-empty.td-input + .slds-form-element__label {
    top: 0.1rem;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .slds-form-element__control.slds-form-element__control-animated-label input.slds-is-dirty.slds-not-empty + .slds-form-element__label, .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .slds-form-element__control.slds-form-element__control-animated-label input.slds-is-dirty.slds-not-empty ~ .slds-form-element__label {
    top: 0rem;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .slds-form-element__control.slds-form-element__control-animated-label .slds-form-element__label {
    padding-left: 0.75rem;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-configure-text {
    font-size: 1rem;
    letter-spacing: 0.01rem;
    color: #595959;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .b2b-trash_icon {
    cursor: pointer;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox .slds-combobox_container .slds-combobox__form-element.slds-form-element__control.slds-form-element__control-animated-label input[readonly] {
    font-size: 0.8125rem;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox.b2b-combobox {
    margin-top: 1rem;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox.b2b-combobox .slds-form-element__control.slds-form-element__control-animated-label input.slds-is-dirty.slds-not-empty + .slds-form-element__label label {
    color: #3e3e3c;
    font-weight: 400;
    letter-spacing: 0.2px;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_combobox.b2b-combobox-position {
    position: relative;
    top: 1.4375rem;
  }
  
  .b2b-attribute-list .b2b-attribute-container .b2b-attribute-config-offer_radio {
    min-width: 23rem;
  }
  
  .b2b-attribute-list .b2b-attribute-category-name {
    font-size: 1rem;
    font-weight: 700;
    color: #000;
  }
  
  .b2b-rapid-content {
    margin: -2.5rem 1.5rem auto;
  }
  
  .b2b-rapid-content span {
    width: 2.5rem;
  }
  
  .b2b-child-addons .b2b-child-addons_title {
    font-size: 1rem;
    width: 100%;
    margin: 0.5rem 0 1rem 0.7rem;
  }
  
  .b2b-config-child-container {
    margin-top: 1.5rem;
  }
  
  .b2b-total-bar {
    min-height: 5rem;
    background-color: #fff;
    -ms-flex-pack: justify;
        justify-content: space-between;
    padding: 1.2rem 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    box-shadow: 0px -6px 11px 0px rgba(213, 213, 213, 0.67);
  }
  
  .b2b-total-bar.b2b-utiliity-bar {
    bottom: 2rem;
  }
  
  .b2b-total-bar .b2b-btn-container {
    position: absolute;
    right: 2rem;
  }
  
  .b2b-total-bar .b2b-configure_label {
    color: #444444;
    font-size: 0.75rem;
    letter-spacing: 0.4px;
    margin-bottom: 0.4rem;
  }
  
  .b2b-total-bar .b2b-configure_locations {
    color: #000;
    font-size: 1rem;
    text-align: right;
    font-weight: 700;
  }
  
  .b2b-total-bar .b2b-configure_container {
    -ms-flex-positive: 5;
        flex-grow: 5;
  }
  
  .b2b-total-bar .b2b-price_container {
    -ms-flex-positive: 3;
        flex-grow: 3;
    width: 100%;
    -ms-flex-pack: justify;
        justify-content: space-between;
  }
  
  .b2b-total-bar .b2b-price_container .b2b-quantity_value {
    border: 1px solid #dddbda;
    height: 1.4rem;
    width: 2.5rem;
    text-align: center;
  }
  
  .b2b-total-bar .b2b-price_container .b2b-location-button {
    display: block;
    color: #fff;
    font-size: 0.7rem;
    padding: 0 1rem;
    margin-top: 0.6rem;
    cursor: pointer;
    background-color: #1589ee;
    width: 100%;
  }
  
  .b2b-total-bar .b2b-price_container .b2b-location-button[disabled] {
    pointer-events: none;
    cursor: not-allowed;
    background-color: #a7a7a7;
  }
  
  .b2b-total-bar .b2b-price_container.b2b-footer-btn {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: end;
        justify-content: flex-end;
  }
  
  .b2b-total-bar .b2b-link-button[disabled] {
    cursor: not-allowed;
    color: #747474;
  }
  
  .b2b-total-bar .b2b-qty-box {
    border: 1px solid #dddbda;
    height: 1.4rem;
    width: 2.6rem;
    text-align: center;
  }
  
  .b2b-total-bar .slds-p-bottom_small.b2b-footer {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: space-evenly;
        justify-content: space-evenly;
  }
  
  .b2b-total-bar.b2b-align-footer {
    padding: 1.2rem 0.5rem 0.5rem 2rem;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-total-bar {
      padding: 1.2rem 2rem;
    }
  
    .b2b-total-bar .b2b-configure_container {
      margin-bottom: 0;
    }
  
    .b2b-total-bar .b2b-price_container {
      width: auto;
    }
  
    .b2b-total-bar .b2b-price_container .b2b-location-button {
      width: auto;
    }
  }
  .b2b-child_radio-container {
    background: #fff;
    border: 1px solid #ecebea;
    border-radius: 0.25rem;
    box-shadow: 0 3px 0.25rem 0 #ecebea;
    padding: 1rem;
    margin-bottom: 0.7rem;
  }
  
  .b2b-child_radio-container .b2b-label-container {
    display: block;
    position: relative;
  }
  
  .b2b-child_radio-container .b2b-label-container .b2b-label-details {
    margin-top: 1rem;
  }
  
  .b2b-child_radio-container .b2b-label-container .b2b-card_title {
    width: 25.5rem;
    font-weight: 300;
    font-size: 1rem;
    color: #000;
  }
  
  .b2b-child_radio-container .b2b-label-container .b2b-card_title .b2b-attribute-radio {
    margin-right: 0.25rem;
  }
  
  .b2b-child_radio-container .b2b-label-container .b2b-card_title .b2b-attribute-radio [type=radio]:checked + .slds-radio__label .slds-radio_faux {
    border-color: #1589ee;
  }
  
  .b2b-child_radio-container .b2b-label-container .b2b-card_title .b2b-attribute-radio [type=radio]:checked + .slds-radio__label .slds-radio_faux::after {
    background-color: #1589ee;
  }
  
  @media screen and (min-width: 80rem) {
    .b2b-child_radio-container .b2b-label-container .b2b-card_title {
      width: 25.5rem;
    }
  }
  .b2b-child_radio-container .b2b-label-container .b2b-price_info {
    overflow: hidden;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    right: 1.5rem;
  }
  
  .b2b-child_radio-container .b2b-label-container .b2b-price_info .b2b-each-attribute {
    min-width: 6rem;
  }
  
  .b2b-child_radio-container .b2b-label-container .b2b-price_info .b2b-each-attribute .b2b-attribute_label {
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.3px;
    color: #706E6B;
  }
  
  .b2b-child_radio-container .b2b-label-container .b2b-price_info .b2b-each-attribute .b2b-attribute_value {
    font-size: 1rem;
    font-weight: bold;
  }
  
  .b2b-child_radio-container .b2b-label-container .b2b-price_info .b2b-each-attribute .b2b-attribute_value {
    float: right;
    color: #000;
    font-size: 1rem;
    font-weight: 300;
  }
  
  .b2b-child_radio-container .b2b-label-container .b2b-quantity {
    width: auto;
    min-height: 2rem;
  }
  
  .b2b-child_radio-container .b2b-label-container .b2b-quantity .b2b-quantity_value {
    border: 1px solid #dddbda;
    height: 1.4rem;
    width: 3rem;
    padding-left: 1.2rem;
    font-size: 0.9rem;
  }
  
  .b2b-child_radio-container .b2b-label-container .b2b-quantity .b2b-quantity_value:disabled {
    background-color: #F6F6F6;
  }
  
  .b2b-child_radio-container .b2b-label-container .b2b-quantity .b2b-configure_label {
    color: #706e6b;
    font-size: 0.65rem;
    font-weight: 400;
    letter-spacing: 0.025rem;
    margin-bottom: 0.25rem;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-child_radio-container {
      padding: 1.5rem;
    }
  
    .b2b-child_radio-container .b2b-quantity {
      margin: -0.5rem 2rem 0 2rem;
    }
  
    .b2b-child_radio-container .b2b-label-container {
      display: -ms-flexbox;
      display: flex;
    }
  
    .b2b-child_radio-container .b2b-label-container .b2b-card_title {
      font-size: 1rem;
      width: 37vw;
    }
  
    .b2b-child_radio-container .b2b-label-container .b2b-card_title.selected {
      font-size: 1.3rem;
    }
  
    .b2b-child_radio-container .b2b-label-container .b2b-label-details {
      margin-top: 0;
    }
  }
  .b2b-child_radio-container.selected .b2b-label-container .b2b-card_title {
    font-weight: 700;
  }
  
  .b2b-child_radio-container.selected .b2b-label-container .b2b-price_info .b2b-each-attribute .b2b-attribute_value {
    border-bottom: 1px dashed #000;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }
  
  .b2b-child_radio-container.product-group-child .b2b-label-container .b2b-price_info {
    right: 3.5rem;
  }
  
  .b2b-hr {
    margin: 0;
    color: #b0adab;
  }
  
  .b2b-configure-offer-container {
    margin-bottom: 4rem;
  }
  
  .b2b-error-message {
    padding: 0.7rem 0 0.7rem 1rem;
    background: #FFEED0;
  }
  
  .b2b-error-message.b2b-root-message {
    margin: 0.5rem 6vw 0 6vw;
  }
  
  .b2b-grey-35 {
    color: #595959;
  }
  
  .b2b-config-offer {
    padding-bottom: 2rem;
    background: #F6F6F6;
  }
  
  .b2b-config-offer .b2b-inline-block-relative {
    display: inline-block;
    position: relative;
  }
  
  .b2b-config-offer .b2b-popover-alignment {
    position: absolute;
    left: 0;
    top: 2rem;
    width: 50vw;
    max-height: 25rem;
    overflow-y: auto;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-config-offer {
      padding: 1rem 1rem 9rem;
    }
  }
  @media screen and (min-width: 80rem) {
    .b2b-config-offer {
      min-height: 70vh;
      height: auto;
      padding: 1rem 6rem 6rem 6rem;
    }
  }
  .b2b-adjust-price-modal .slds-modal__content {
    padding: 0;
  }
  
  .b2b-adjust-price-modal .slds-modal__container {
    margin: 0;
    padding: 0;
  }
  
  .b2b-adjust-price-modal .slds-modal__container .slds-modal__close {
    display: none;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-adjust-price-modal .slds-modal__container {
      margin: 0 auto;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
      padding: 3rem 0;
    }
  }
  .b2b-adjust-price-modal .b2b-modal-header {
    font-size: 1.3rem;
    color: #000;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-adjust-price-modal .b2b-modal-header {
      font-size: 1.6vw;
    }
  }
  .b2b-adjust-price-modal .b2b-override-price-offer {
    background-color: #F6F6F6;
    padding: 1.5rem 0rem;
    color: #595959;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-override-select-price .slds-radio_button-group {
    width: auto;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-override-select-price .slds-radio_button .slds-radio_faux {
    color: #1589ee;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-override-select-price .slds-radio_button [type=radio]:checked + .slds-radio_button__label {
    background-color: #1589ee;
    border-radius: 0;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-override-select-price .slds-radio_button [type=radio]:checked + .slds-radio_button__label .slds-radio_faux {
    color: #fff;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-override-select-price .slds-radio_button [type=radio]:checked + .slds-radio_button__label .slds-radio-overlay {
    border: none;
    border-radius: 0;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container {
    background-color: #fff;
    margin-top: 1.5rem;
    border: 1px solid #dddbda;
    border-radius: 0.25rem;
    width: 100%;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container .b2b-override-prices-container {
    font-size: 1rem;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container .b2b-override-prices-container .b2b-override-prices_row {
    padding: 0.7rem 2.4rem;
    font-size: 0.9rem;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container .b2b-override-prices-container .b2b-override-prices_row .b2b-delete-adjustment {
    cursor: pointer;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container .b2b-override-prices-container .b2b-override-prices_row .b2b-adjustment-description {
    font-size: 0.7rem;
    color: #b0adab;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container .b2b-override-prices-container .b2b-override-prices_row:hover {
    background-color: #f3f9fe;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container .b2b-override-prices-container .b2b-override-prices_row:nth-last-child(2) {
    padding-bottom: 1rem;
    border-bottom: 1px solid #000;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container .b2b-override-prices-container .b2b-override-prices_row.b2b-no-bg:hover {
    background: none;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container .b2b-custom-adjustment .b2b-adjustment-type-combobox {
    width: 20vw;
    max-width: 10rem;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container .b2b-custom-adjustment .b2b-adjustment-input {
    width: 13vw;
    margin-left: 0.5rem;
    max-width: 7rem;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container .b2b-custom-adjustment .b2b-adjustment-input .b2b-input-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.4rem;
    line-height: 1;
    color: #b0adab;
    margin-left: 0.8rem;
    font-size: 0.8rem;
    font-weight: 700;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container .b2b-custom-adjustment .b2b-adjustment-input .b2b-input-icon.right {
    right: 0.8rem;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container .b2b-custom-adjustment .b2b-adjustment-input .b2b-input {
    border: 1px solid #dddbda;
    border-radius: 0.25rem;
    padding: 0 1rem;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container .b2b-custom-adjustment .b2b-adjustment-input .b2b-input:focus {
    outline: none;
    border: 1px solid #1589ee;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container .b2b-custom-adjustment .b2b-adjustment-input .b2b-input::-webkit-outer-spin-button, .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container .b2b-custom-adjustment .b2b-adjustment-input .b2b-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container .b2b-custom-adjustment .b2b-add-button {
    background-color: #fff;
    border: 1px solid #dddbda;
    font-size: 0.7rem;
    padding: 0 1.2rem;
    cursor: pointer;
    transition: all 0.25s ease-in;
    color: #1589ee;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-waterfall-container .b2b-custom-adjustment .b2b-add-button:hover {
    color: #fff;
    background-color: #1589ee;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-override-header {
    border-bottom: 1px solid #dddbda;
    padding: 0.3rem;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-override-header_title {
    font-size: 1rem;
    margin-left: 0.5rem;
    vertical-align: middle;
  }
  
  .b2b-adjust-price-modal .b2b-override-price-offer .b2b-override-header.b2b-justify-content {
    -ms-flex-pack: justify;
        justify-content: space-between;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-adjust-price-modal .b2b-override-price-offer .b2b-override-header {
      padding: 0.9rem;
    }
  }
  @media screen and (min-width: 48rem) {
    .b2b-adjust-price-modal .b2b-override-price-offer {
      padding: 1.5rem 2rem;
    }
  }
  .b2b-adjust-price-modal .b2b-modal-button {
    color: #1589ee;
    padding: 0rem 2.5rem;
  }
  
  .b2b-adjust-price-modal .b2b-modal-button.b2b-primary {
    color: #fff;
    background: #1589ee;
    border: 1px solid #1589ee;
  }
  
  .b2b-adjust-price-modal .b2b-select-timelist-container {
    -ms-flex-pack: justify;
        justify-content: space-between;
  }
  
  .b2b-adjust-price-modal .b2b-select-timelist-container .b2b-time-policy-combobox {
    width: 95%;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-adjust-price-modal .b2b-select-timelist-container .b2b-time-policy-combobox {
      width: 48%;
    }
  }
  .b2b-adjust-price-modal .b2b-select-timelist-container .b2b-time-policy-combobox .slds-form-element__control.slds-form-element__control-animated-label .slds-form-element__label {
    padding-left: 0.35rem;
  }
  
  .b2b-adjust-price-modal .b2b-select-timelist-container .b2b-time-policy-combobox .slds-form-element__control.slds-form-element__control-animated-label input.slds-is-dirty.slds-not-empty + .slds-form-element__label, .b2b-adjust-price-modal .b2b-select-timelist-container .b2b-time-policy-combobox .slds-form-element__control.slds-form-element__control-animated-label input.slds-is-dirty.slds-not-empty ~ .slds-form-element__label {
    top: 0.2rem;
  }
  
  .b2b-apply-discount-modal .slds-modal__content {
    padding: 0;
  }
  
  .b2b-apply-discount-modal .slds-modal__container {
    margin: 0;
    padding: 0;
  }
  
  .b2b-apply-discount-modal .slds-modal__container .slds-modal__close {
    display: none;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-apply-discount-modal .slds-modal__container {
      margin: 0 auto;
      display: -ms-flexbox;
      display: flex;
      padding: 3rem 0;
    }
  }
  .b2b-apply-discount-modal .b2b-modal-header {
    font-size: 1.3rem;
    color: #000;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-apply-discount-modal .b2b-modal-header {
      font-size: 1.6vw;
    }
  }
  .b2b-apply-discount-modal .b2b-adjust-discount {
    background-color: #F6F6F6;
    padding: 1.5rem 0rem;
    color: #595959;
  }
  
  .b2b-apply-discount-modal .b2b-adjust-discount .b2b-discounts-container {
    background-color: #fff;
    margin-top: 1.5rem;
    border: 1px solid #dddbda;
    border-radius: 0.25rem;
    width: 100%;
  }
  
  .b2b-apply-discount-modal .b2b-adjust-discount .b2b-discounts-container .b2b-apply-discounts-table_container {
    font-size: 1rem;
  }
  
  .b2b-apply-discount-modal .b2b-adjust-discount .b2b-discounts-container .b2b-available-discounts-container {
    font-size: 1rem;
  }
  
  .b2b-apply-discount-modal .b2b-adjust-discount .b2b-override-header {
    border-bottom: 1px solid #dddbda;
    padding: 0.9rem;
  }
  
  .b2b-apply-discount-modal .b2b-adjust-discount .b2b-override-header_title {
    font-size: 1rem;
    margin-left: 0.5rem;
    vertical-align: middle;
  }
  
  .b2b-apply-discount-modal .b2b-adjust-discount .b2b-search-discount {
    margin: 1.5rem 1rem 1.5rem 0;
    text-align: right;
  }
  
  .b2b-apply-discount-modal .b2b-adjust-discount .b2b-search-discount .b2b-search-discount_input {
    border: 1px solid #dddbda;
    border-radius: 0.25rem;
    padding: 0 2rem;
    width: 20rem;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-apply-discount-modal .b2b-adjust-discount {
      padding: 1.5rem 2rem;
    }
  
    .b2b-apply-discount-modal .b2b-adjust-discount .b2b-override-select-price {
      padding-left: 0;
    }
  
    .b2b-apply-discount-modal .b2b-adjust-discount .b2b-search-discount {
      margin: 1.5rem 0;
    }
  }
  .b2b-apply-discount-modal .b2b-modal-button {
    color: #1589ee;
    padding: 0.25rem 2.5rem;
    margin: 0 1rem 0 0;
  }
  
  .b2b-apply-discount-modal .b2b-modal-button.b2b-primary {
    color: #fff;
    background: #1589ee;
    border: 1px solid #1589ee;
  }
  
  .b2b-discount-card {
    background: #fff;
    border-top: 1px solid #d8d8d8;
  }
  
  .b2b-discount-card:first-child {
    border-top: none;
  }
  
  .b2b-discount-card input.b2b-discount-card_checkbox {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  
  .b2b-discount-card .b2b-discount-card_container {
    -ms-flex: 1;
        flex: 1;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs {
    overflow: hidden;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab {
    width: 100%;
    color: #fff;
    overflow: hidden;
    transition: all 0.25s ease-in;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label {
    display: -ms-flexbox;
    display: flex;
    position: relative;
    -ms-flex-pack: justify;
        justify-content: space-between;
    padding: 1.5rem 1rem;
    background: #fff;
    font-weight: 700;
    font-size: 1.3rem;
    color: #000;
    cursor: pointer;
    transition: all 0.25s ease-in;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label.showIcon {
    /* Icon */
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label.showIcon::after {
    content: "❯";
    width: 1.3em;
    height: 1.3em;
    font-size: 1.6rem;
    text-align: center;
    transition: all 0.35s;
    color: #b0adab;
    right: 2rem;
    position: relative;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-card_title {
    width: 40vw;
    font-size: 1rem;
    font-weight: 400;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-card_title .b2b-discount-status {
    font-size: 0.6rem;
    color: #666666;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-attributes_info {
    overflow: hidden;
    position: inherit;
    width: inherit;
    margin-top: -0.5rem;
    overflow: auto;
    white-space: nowrap;
    /* Hide scrollbars */
    -ms-overflow-style: none;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-attributes_info .b2b-each-attribute {
    min-width: 6rem;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-attributes_info .b2b-each-attribute .b2b-attribute_label {
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.3px;
    color: #706E6B;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-attributes_info .b2b-each-attribute .b2b-attribute_value {
    font-size: 1rem;
    font-weight: bold;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-attributes_info::-webkit-scrollbar {
    display: none;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-attributes_info .b2b-each-attribute {
    min-width: auto;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-attributes_info .b2b-each-attribute .b2b-discount-description {
    font-size: 0.7rem;
    color: #000;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-attributes_info .b2b-each-attribute .b2b-discount-description.description {
    color: #b0adab;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-attributes_info {
      position: absolute;
    }
  
    .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-attributes_info.description {
      margin-top: 0.5rem;
    }
  }
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-price_info {
    overflow: hidden;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    right: 1rem;
    margin-top: -2rem;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-price_info .b2b-each-attribute {
    min-width: 6rem;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-price_info .b2b-each-attribute .b2b-discount-price_label {
    font-size: 0.7rem;
    color: #b0adab;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-price_info .b2b-each-attribute .b2b-attribute_value {
    font-size: 1rem;
    font-weight: bold;
    float: right;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-price_info .b2b-each-attribute {
      min-width: 6rem;
    }
  }
  @media screen and (min-width: 48rem) {
    .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-price_info {
      right: 6rem;
      margin-top: 0;
    }
  }
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-label-container {
    display: block;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-label-container .b2b-child-indicator {
    position: absolute;
    top: 0;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-label-container .b2b-label-details {
    margin-top: 2.5rem;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-delete-menu {
    position: absolute;
    right: 1.5rem;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-delete-menu .b2b-add-discount {
    font-size: 0.8rem;
    font-weight: 400;
    color: #1589ee;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label {
      padding: 1rem 3rem 2.25rem 1.5rem;
    }
  
    .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label.showIcon::after {
      right: 0;
    }
  
    .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-label-container {
      display: -ms-flexbox;
      display: flex;
    }
  
    .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-label-container .b2b-label-details {
      margin-top: 0;
    }
  }
  @media screen and (min-width: 60rem) {
    .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-label .b2b-discount-attributes_info {
      display: -ms-flexbox;
      display: flex;
    }
  }
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-content {
    padding: 0 1rem;
    max-height: 0;
    background: white;
    transition: all 0.35s;
    overflow: auto;
    color: #595959;
    position: relative;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-content {
      padding: 0 1.5rem;
    }
  }
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-content .b2b-configure-discount-row {
    -ms-flex-pack: justify;
        justify-content: space-between;
    margin: 1rem 0;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-content .b2b-configure-discount-row .b2b-discount-chargeType {
    font-size: 1rem;
    font-weight: bold;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-content .b2b-configure-discount-row .b2b-discount-chargeType {
      font-size: 0.9rem;
      font-weight: 400;
      margin-top: 0.5rem;
    }
  }
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-content .b2b-configure-discount-row .b2b-discount-adjustment .b2b-adjustment-type-combobox {
    margin: 0.5rem 0;
    width: 100%;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-content .b2b-configure-discount-row .b2b-discount-adjustment .b2b-adjustment-type-combobox {
      width: auto;
    }
  }
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-content .b2b-configure-discount-row .b2b-discount-configure-input {
    margin: 0;
    width: 100%;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-content .b2b-configure-discount-row .b2b-discount-configure-input .b2b-discount-input {
    border: 1px solid #dddbda;
    border-radius: 0.25rem;
    padding: 0 1rem;
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-content .b2b-configure-discount-row .b2b-discount-configure-input .b2b-discount-input:focus {
    outline: none;
    border: 1px solid #1589ee;
  }
  
  @media screen and (min-width: 48rem) {
    .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab-content .b2b-configure-discount-row .b2b-discount-configure-input {
      width: auto;
      margin: 0.5rem;
    }
  }
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab input.b2b-discount-card_checkbox:checked + .b2b-discount-card_tab-label.showIcon::after {
    transform: rotate(90deg);
  }
  
  .b2b-discount-card .b2b-discount-card_container .b2b-discount-card_tabs .b2b-discount-card_tab input.b2b-discount-card_checkbox:checked ~ .b2b-discount-card_tab-content {
    max-height: 500px;
    border-top: 1px solid #d8d8d8;
  }
  
  .b2b-config-promo-wrapper {
    background-color: #EEF4FF;
    padding: 0.6rem 1.4rem;
  }
  
  .b2b-config-promo-wrapper.b2b-summary-promotion {
    width: 270px;
    padding: 0.6rem 0.3rem 0.6rem 0;
    border-radius: 0.1rem;
  }
  
  .b2b-config-promo-wrapper .b2b-promo-details {
    text-decoration: underline;
    cursor: pointer;
    color: #1589ee;
    padding: 0 4rem 0 0;
  }
  
  .b2b-config-promo-wrapper .b2b-config-promo-name {
    color: #000;
    font-weight: 700;
  }
  
  .b2b-config-promo-wrapper .b2b-config-promo-details {
    color: #1589ee;
    font-weight: 700;
  }
  
  .b2b-config-promo-wrapper .b2b-config-promo-selected {
    width: auto;
    color: #fff;
    font-size: 0.7rem;
    padding: 0 1rem;
    margin: 0.6rem 0 1.2rem 0;
    line-height: 1.875rem;
    border-radius: 0.25rem;
    background-color: #1589ee;
  }
  
  .b2b-product-relationship-rule .b2b-rule {
    background: rgba(221, 219, 218, 0.13);
    border: 1px solid #dddbda;
    box-sizing: border-box;
    border-radius: 0.125rem;
  }
  
  .b2b-product-relationship-rule .b2b-rule-main-header-text {
    font-size: 0.875rem;
    line-height: 1rem;
    color: #000;
  }
  
  .b2b-product-relationship-rule .b2b-container {
    margin-top: 0.375rem;
    width: 70%;
    height: 4.625rem;
    position: relative;
  }
  
  .b2b-product-relationship-rule .b2b-container .b2b-checkbox {
    background: #fff;
    border: 1px solid #dddbda;
    box-sizing: border-box;
    border-radius: 0.125rem;
    width: 1rem;
    height: 1rem;
    margin-left: 1.3125rem;
    margin-right: 0.625rem;
  }
  
  .b2b-product-relationship-rule .b2b-container .b2b-rule-name .b2b-link-icon {
    margin-right: 0.6rem;
  }
  
  .b2b-product-relationship-rule .b2b-container .b2b-rule-name .b2b-rule-text {
    font-size: 0.8rem;
    line-height: 1rem;
  }
  
  .b2b-product-relationship-rule .b2b-container .b2b-relate-prod {
    position: absolute;
    right: 1.25rem;
    top: 0.25rem;
    width: 17rem;
  }
  
  .b2b-product-relationship-rule .b2b-container .b2b-relate-prod .b2b-input-name {
    font-size: 0.625rem;
    line-height: 1.25rem;
    margin-bottom: 0;
  }
  
  .b2b-product-relationship-rule .b2b-container .b2b-relate-prod .b2b-show-rel-prod {
    height: 2rem;
    background: #fff;
    border: 1px solid #dddbda;
    box-sizing: border-box;
    border-radius: 0.125rem;
    padding: 0 0.5rem;
  }
  
  .b2b-product-relationship-rule .b2b-container .b2b-relate-prod .b2b-show-rel-prod .b2b-rel-prod-text {
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: #000;
  }
  
  .b2b-product-relationship-rule .b2b-container .b2b-relate-prod .b2b-show-rel-prod .b2b-icon-edit {
    float: right;
    cursor: pointer;
  }
  
  .b2b-product-relationship-rule .b2b-rule-section {
    width: 18rem;
  }
  
  .b2b-product-relationship-rule .b2b-rule-section .b2b-rule-sec-header {
    height: 2.875rem;
    background: #f3f2f2;
    position: relative;
    padding: 0 0.9375rem;
  }
  
  .b2b-product-relationship-rule .b2b-rule-section .b2b-rule-sec-header .b2b-link-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5625rem;
    padding-bottom: 0.2rem;
    background-color: #7A9AE6;
  }
  
  .b2b-product-relationship-rule .b2b-rule-section .b2b-rule-sec-header .b2b-rule-header-text {
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #000;
  }
  
  .b2b-product-relationship-rule .b2b-rule-section .b2b-prod-section {
    max-height: 21rem;
    overflow: auto;
  }
  
  .b2b-product-relationship-rule .b2b-rule-section .b2b-prod-section .b2b-product-details {
    padding: 0.625em 0.9375rem;
  }
  
  .b2b-product-relationship-rule .b2b-rule-section .b2b-prod-section .b2b-product-details .b2b-prod-name {
    font-size: 0.6875rem;
    line-height: 0.8125rem;
    color: #000;
  }
  
  .b2b-product-relationship-rule .b2b-rule-section .b2b-prod-section .b2b-rules {
    border-top: 1px solid #dddbda;
    padding: 0em 0.9375rem;
  }
  
  .b2b-product-relationship-rule .b2b-rule-section .b2b-prod-section .b2b-rules .b2b-prod-rule-sec {
    margin: 0.625em 0rem;
  }
  
  .b2b-product-relationship-rule .b2b-rule-section .b2b-prod-section .b2b-rules .b2b-prod-rule-sec .b2b-rule-header .b2b-link-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5625rem;
    padding-bottom: 0.2rem;
    background-color: #7A9AE6;
  }
  
  .b2b-product-relationship-rule .b2b-rule-section .b2b-prod-section .b2b-rules .b2b-prod-rule-sec .b2b-rule-header .b2b-rel-text {
    font-size: 0.8rem;
    line-height: 0.8rem;
    color: #000;
  }
  
  .b2b-product-relationship-rule .b2b-rule-section .b2b-prod-section .b2b-rules .b2b-prod-rule-sec .b2b-rule-name {
    padding: 0.625em 0em 0.1875rem;
    border-bottom: 1px solid #dddbda;
    font-size: 0.7rem;
    line-height: 0.7rem;
    color: #706e6b;
  }
  
  .b2b-product-relationship-rule .b2b-rule-section .b2b-prod-section .b2b-rules .b2b-rel-prod-section .b2b-rel-prod {
    font-size: 0.7rem;
    line-height: 0.7rem;
    color: #000;
  }
  
  .b2b-product-relationship-rule .b2b-rule-section .b2b-prod-section .b2b-rules .b2b-rel-prod-section .b2b-de-link {
    font-size: 0.7rem;
    line-height: 0.7rem;
    color: #006AFF;
    direction: rtl;
    cursor: pointer;
    margin: 0.625rem 0rem 0.625rem;
  }
  
  .b2b-upload_wrapper {
    min-height: calc(100vh - 20rem);
  }
  
  .b2b-upload_box {
    border: 1px dashed #000;
    border-radius: 0.25rem;
  }
  
  .b2b-upload_box-filled {
    border-style: solid;
  }
  
  .b2b-dragging {
    background-color: #f3f9fe;
  }
  
  .b2b-show_popup {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 6000;
  }
  
  .b2b-show_popup .b2b-upload_wrapper {
    min-height: 100vh;
  }
  
  .b2b-upload_wrapper .b2b-selection-options .slds-radio {
    margin-bottom: 0.5rem;
  }
  
  .b2b-upload_wrapper .b2b-selection-options .slds-radio [type=radio]:checked + .slds-radio__label .slds-radio_faux {
    border-color: #1589ee;
  }
  
  .b2b-upload_wrapper .b2b-selection-options .slds-radio [type=radio]:checked + .slds-radio__label .slds-radio_faux:after {
    background: #1589ee;
  }
  
  .b2b-upload_wrapper .b2b-selection-options .slds-radio .slds-radio_faux {
    margin-right: 0.75rem;
  }
  
  .b2b-upload_wrapper .b2b-selection-options .slds-radio .slds-form-element__label {
    font-weight: normal;
  }
  
  .b2b-table {
    background-color: #fff;
    color: #181818;
    table-layout: fixed;
    width: 100%;
  }
  
  .b2b-summary-table-wrapper {
    table-layout: auto;
  }
  
  .b2b-table_row {
    border-bottom: 1px solid #C9C9C9;
  }
  
  .b2b-table_row .b2b-table_row-header {
    border-color: #b0adab;
  }
  
  .b2b-search-records {
    display: inline-block;
    width: 84%;
    margin-right: 0.5rem;
    flex: 1;
  }
  
  .b2b-upload-btn {
    margin-bottom: 0.25rem;
  }
  
  .b2b-table_cell {
    padding: 0.75rem 0.5rem;
    vertical-align: top;
    color: #444444;
  }
  
  .b2b-table_head-row .b2b-table_cell {
    font-weight: bold;
    padding-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
  }
  
  .b2b-table_cell:not(.b2b-table_cell-readonly):hover, .b2b-table_cell:not(.b2b-table_cell-readonly):focus {
    background-color: #fff;
  }
  
  .b2b-table_cell:not(.b2b-table_cell-readonly):hover .b2b-hover-icon, .b2b-table_cell:not(.b2b-table_cell-readonly):focus .b2b-hover-icon {
    opacity: 1;
  }
  
  .b2b-table_cell:not(.b2b-table_cell-readonly) .b2b-table_sort:focus .b2b-hover-icon {
    opacity: 1;
  }
  
  .b2b-table_cell:not(.b2b-table_cell-readonly) .b2b-hover-icon:focus {
    opacity: 1;
  }
  
  .b2b-table_cell-label {
    display: none;
    color: #706e6b;
    font-size: 0.75rem;
  }
  
  .b2b-table_cell .slds-form-container {
    padding: 0;
    margin-bottom: 0;
  }
  
  .b2b-table_cell .slds-input {
    line-height: 1;
    padding: 0;
  }
  
  .b2b-table_cell .b2b-table-cell-field-wrapper {
    display: -ms-flexbox;
    display: flex;
  }
  
  .b2b-table_sort {
    outline: none;
  }
  
  .b2b-icon_cell {
    width: 3rem;
  }
  
  .b2b-table_checkbox .slds-checkbox [type=checkbox]:indeterminate ~ .slds-checkbox_faux {
    background-color: #fff;
  }
  
  .b2b-table_checkbox .slds-checkbox [type=checkbox]:indeterminate ~ .slds-checkbox_faux:after {
    background-color: #fff;
  }
  
  .b2b-map-btn {
    position: absolute;
    right: 1rem;
  }
  
  .b2b-map-btn .b2b-map-top {
    margin-top: 4.6rem;
  }
  
  .b2b-tbl-top {
    margin-top: 3rem;
  }
  
  .b2b-panel-container .slds-is-relative {
    overflow: visible;
  }
  
  .b2b-panel-container .b2b-panel {
    position: absolute;
    right: 1rem;
    top: 13rem;
    height: 30rem;
    width: 50%;
    z-index: 1;
    box-shadow: none;
    background: none;
  }
  
  .slds-p-bottom_small.b2b-flex {
    display: -ms-flexbox;
    display: flex;
  }
  
  .slds-grid.b2b-filter {
    padding-left: 3rem;
  }
  
  @media (max-width: 1024px) {
    .slds-grid.b2b-filter {
      padding-left: 1rem;
    }
  }
  .b2b-input.b2b-flex-btn {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: end;
        justify-content: flex-end;
  }
  
  .b2b-table_cell-center {
    text-align: center;
  }
  
  .b2b-table_cell-right {
    text-align: right;
  }
  
  @media (max-width: 1024px) {
    .b2b-table,
  .b2b-table_body,
  .b2b-table_cell,
  .b2b-table_cell-label {
      display: block;
    }
  
    .b2b-table_transition-hide,
  .b2b-table_head {
      display: none;
    }
  
    .b2b-table_row {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      padding-left: 2rem;
      position: relative;
    }
  
    .b2b-table_row .b2b-row_hover-show {
      opacity: 1;
    }
  
    .b2b-table_cell {
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
      padding: 0.5rem;
      width: 100%;
    }
  
    .b2b-table_cell-full {
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
    }
  
    .b2b-icon_cell {
      -ms-flex: 0;
          flex: 0;
      padding: 0;
    }
  
    .b2b-icon_cell .slds-checkbox {
      position: absolute;
      left: -1rem;
      top: 1rem;
      transform: translateY(-50%);
    }
  
    .b2b-table_cell-box {
      display: -ms-flexbox;
      display: flex;
    }
  
    .b2b-table_cell-label {
      -ms-flex: 0 0 50%;
          flex: 0 0 50%;
    }
  
    .b2b-action_cell {
      position: absolute;
      right: 0;
      width: 1.5rem;
      top: 0.5rem;
    }
  
    .b2b-panel-container .slds-is-relative {
      overflow: visible;
    }
  
    .b2b-panel-container .b2b-panel {
      position: absolute;
      right: 1rem;
      top: 22.7rem;
      height: 30rem;
      width: 50%;
      z-index: 1;
      box-shadow: none;
      background: none;
    }
  
    .b2b-table_cell-center {
      text-align: left;
    }
  
    .b2b-table_cell-right {
      text-align: left;
    }
  
    .b2b-desc-item-wrapper {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
    }
  }
  @media (max-width: 768px) {
    .b2b-table_cell {
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
    }
  
    .b2b-map-btn {
      position: absolute;
      right: 1rem;
    }
  
    .b2b-map-btn .b2b-map-top {
      margin-top: 7.5rem;
    }
  }
  @media (min-width: 1024px) {
    .b2b-table_row:not(.b2b-table_head-row):hover {
      background-color: #f3f2f2;
    }
  
    .b2b-table_row:not(.b2b-table_head-row):hover .b2b-row_hover-show {
      opacity: 1;
    }
  
    .b2b-table_row:not(.b2b-table_head-row) .b2b-row_hover-show:focus {
      opacity: 1;
    }
  
    td.b2b-table_cell-readonly.b2b-table_cell-center, td.b2b-table_cell-readonly.b2b-table_cell-right {
      padding-right: 1.6rem;
    }
  
    td.b2b-summary-cell {
      max-width: 350px;
    }
  
    td.b2b-group-cell {
      min-width: 13rem;
      max-width: 18rem;
    }
  
    td.b2b-group-cell .b2b-count-wrapper .b2b-expected-count {
      color: #0070d2;
    }
  
    td.b2b-group-cell .b2b-group-cell-edit {
      min-width: 15rem;
    }
  }
  .b2b-detail-row {
    background-color: #fafaf9;
    border: 1px solid #dddbda;
    box-shadow: inset 0 0 10px -8px #000;
    position: absolute;
    left: 2rem;
    width: calc(100% - 4rem);
    margin-top: 0.75rem;
    padding: 1rem;
    z-index: 6000;
  }
  
  .b2b-detail-row::after {
    width: 1rem;
    height: 1rem;
    background-color: #fafaf9;
    border: 1px solid transparent;
    border-right-color: #dddbda;
    border-top-color: #dddbda;
    content: "";
    position: absolute;
    left: 4rem;
    top: -0.5rem;
    transform: rotate(-45deg);
  }
  
  .b2b-addressvalidation-modal .slds-modal__content {
    height: 30vh !important;
  }
  
  .b2b-row_spacer + .b2b-row_spacer {
    margin-top: 0.75rem;
  }
  
  .b2b-desc-item {
    margin-right: 0.75rem;
    position: relative;
  }
  
  .b2b-desc-item + .b2b-desc-item {
    margin-left: 0.75rem;
  }
  
  .b2b-desc-item + .b2b-desc-item::before {
    content: ".";
    position: absolute;
    left: -0.75rem;
    color: #000;
    font-weight: bold;
  }
  
  .b2b-desc-item_label {
    text-transform: uppercase;
    margin-right: 0.5rem;
  }
  
  .slds-item-desc-item_detail {
    font-weight: bold;
  }
  
  .b2b-summary-cell .slds-datepicker td.slds-is-selected:not(.slds-is-today) > .slds-day {
    background: #1589ee;
  }
  
  .b2b-summary-cell .slds-checkbox [type=checkbox]:checked + .slds-checkbox__label .slds-checkbox_faux {
    background: #1589ee;
  }
  
  .b2b-summary-cell .slds-checkbox [type=checkbox]:focus + .slds-checkbox__label .slds-checkbox_faux {
    border-color: #1589ee;
    box-shadow: 0 0 3px 2px #1589ee;
  }
  
  .b2b-summary-cell .b2b-product-status {
    transform: translateY(-50%);
  }
  
  .b2b-summary-cell .b2b-product-status[data-linkicon="utility:link"] .slds-button__icon {
    fill: #007A59;
  }
  
  .b2b-summary-cell .b2b-product-status[data-linkicon="utility:warning"] .slds-button__icon {
    fill: orange;
  }
  
  .b2b-summary-cell [data-num="0"] .b2b-product-status {
    transform: translateY(-15%);
  }
  
  .b2b-validation_success {
    background-color: rgba(60, 179, 113, 0.3);
  }
  
  .b2b-validation_fail {
    background-color: rgba(255, 99, 71, 0.3);
  }
  
  .b2b-validation_partial {
    background-color: rgba(255, 165, 0, 0.3);
  }
  
  .b2b-record-map-container {
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px solid #C9C9C9;
  }
  
  .b2b-record-map-container .b2b-record-count {
    width: 92.5%;
  }
  
  .b2b-typeahead-container [data-progress-bar] {
    position: absolute;
    bottom: 0;
    left: 0.75rem;
    right: 0.75rem;
    width: auto;
    z-index: 100;
  }
  
  .b2b-typeahead-container .b2b-typeahead-input:focus {
    background: #EEF4FF;
  }
  
  .b2b-typeahead-container .b2b-options-wrapper {
    min-width: 100%;
    position: relative;
    max-width: 140%;
  }
  
  .b2b-typeahead-container .b2b-options-wrapper .b2b-accounts-options .slds-checkbox .slds-checkbox_faux {
    background-color: #C0E5FF;
  }
  
  .b2b-typeahead-container .b2b-options-wrapper .b2b-accounts-options .slds-checkbox [type=checkbox]:focus:checked ~ .slds-checkbox_faux, .b2b-typeahead-container .b2b-options-wrapper .b2b-accounts-options .slds-checkbox [type=checkbox]:checked ~ .slds-checkbox_faux {
    background-color: #C0E5FF;
    border-color: #000;
    opacity: 1;
  }
  
  .b2b-typeahead-container .b2b-options-wrapper .b2b-accounts-options .slds-checkbox [type=checkbox]:indeterminate ~ .slds-checkbox_faux {
    background-color: #C0E5FF;
  }
  
  .b2b-typeahead-container .b2b-options-wrapper .b2b-accounts-options .slds-checkbox [type=checkbox]:indeterminate ~ .slds-checkbox_faux:after {
    background-color: #C0E5FF;
  }
  
  .b2b-typeahead-container .b2b-options-wrapper .b2b-locations-options .slds-checkbox .slds-checkbox_faux {
    background-color: #FFC2C2;
  }
  
  .b2b-typeahead-container .b2b-options-wrapper .b2b-locations-options .slds-checkbox [type=checkbox]:focus:checked ~ .slds-checkbox_faux, .b2b-typeahead-container .b2b-options-wrapper .b2b-locations-options .slds-checkbox [type=checkbox]:checked ~ .slds-checkbox_faux {
    background-color: #FFC2C2;
    border-color: #000;
    opacity: 1;
  }
  
  .b2b-typeahead-container .b2b-options-wrapper .b2b-locations-options .slds-checkbox [type=checkbox]:indeterminate ~ .slds-checkbox_faux {
    background-color: #FFC2C2;
  }
  
  .b2b-typeahead-container .b2b-options-wrapper .b2b-locations-options .slds-checkbox [type=checkbox]:indeterminate ~ .slds-checkbox_faux:after {
    background-color: #FFC2C2;
  }
  
  .b2b-asset-groupBy {
    padding-left: 0;
  }
  
  .b2b-split-btn button {
    padding: 0.34rem;
  }
  
  .b2b-asset-split-menu > div {
    margin-left: -4.3rem;
  }
  
  .b2b-asset-split-menu .b2b-asset-split-menu-style > a {
    text-decoration: none;
    background-color: #fff;
    color: #000;
  }
  
  .b2b-asset-search {
    width: 100%;
  }
  
  .b2b-asset-utility {
    padding-left: 0;
    padding-right: 0;
  }
  
  .b2b-utility-block {
    margin: 0;
  }
  
  .b2b-asset-tbl {
    border-collapse: collapse;
  }
  
  .b2b-asset-recordlink {
    cursor: pointer;
    text-decoration: none;
    color: #0070d2;
  }
  
  .b2b-asset-recordlink:hover {
    text-decoration: underline;
    color: #005fb2;
  }
  
  .b2b-input .slds-form-container {
    padding: 0;
    margin-bottom: 0;
  }
  
  .b2b-input .slds-input {
    border: 1px solid #dddbda;
    border-radius: 0.25rem;
    margin-bottom: 0;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  
  .b2b-input.b2b-field-mapping-combobox .slds-input {
    border: 1px solid #939393;
  }
  
  .b2b-input .slds-input-has-icon_right .slds-input__icon {
    right: 0.5rem;
  }
  
  .b2b-input .slds-input-has-icon_left .slds-input__icon {
    left: 0.5rem;
  }
  
  .b2b-input .slds-combobox_container .slds-combobox__form-element.slds-form-element__control.slds-form-element__control-animated-label input[readonly] {
    padding-left: 0.75rem;
  }
  
  .b2b-menu_full .slds-dropdown {
    width: 100%;
  }
  
  .b2b-menu_full .slds-button__icon {
    display: none;
  }
  
  .b2b-tooltip_wrapper {
    position: relative;
  }
  
  .b2b-tooltip_cont {
    display: none;
    color: #000;
    margin-top: 0.5rem;
    position: absolute;
    top: 100%;
    left: 0;
  }
  
  .b2b-tooltip_wrapper:hover .b2b-tooltip_cont {
    display: block;
  }
  
  .b2b-tooltip_attrwrapper {
    position: relative;
  }
  
  .b2b-tooltip_attr {
    display: none;
    color: #000;
    margin-top: 0.5rem;
    position: absolute;
    top: 100%;
    left: 0;
    transform: translateX(-50%);
  }
  
  .b2b-tooltip_attrwrapper:hover .b2b-tooltip_attr {
    display: block;
  }
  
  .b2b-attribute-count {
    font-size: 0.875rem;
    color: #1564bf;
    font-weight: 400;
    background: none;
    border: none;
  }
  
  .b2b-title {
    font-size: 1.5rem;
    color: #000;
  }

  .b2b-table-filter-header{
    border-top: 1px solid #C9C9C9;
  }

  .b2b-bulk-quote-combox .slds-form-element__label {
    display: none !important;
}

.b2b-bulk-quote-combox {
    display: flex;
}

.b2b-bulk-quote-parent-product-div span {
    display: inline-block;
}

.b2b-bulk-quote-h3 {
    font-size: 18px;
    font-weight: 700;
    color: #444444;
    padding-left: 6px;
}

.b2b-bulk-quote-attr-key {
    font-size: 12px;
    color: #444444;
    font-weight: 400;
}

.b2b-bulk-quote-attr-value {
    font-size: 12px;
    color: #444444;
    font-weight: 700;
}

.b2b-bulk-quote-childProductNameBlk {
    display: flex;
}

.b2b-bulk-quote-chevparent {
    display: flex;
    margin-top: 17px;
    text-decoration: none;
}

.b2b-bulk-attr-flex-container {
    background: #F3F3F3;
    flex-wrap: wrap;
}

.slds-combobox__input-value span {
    padding-top: 5px;
}

.b2b-bulk-popover-suggested-product {
    position: absolute;
    bottom: 2rem;
    right: -135px;
    width: 288px;
}

.b2b-bulk-popover-parent {
    position: absolute;
    bottom: -0.6rem;
    left: -210px;
    width: 197px;
}

.b2b-bulk-popover-child {
    position: absolute;
    bottom: -3.6rem;
    left: -290px;
    width: 277px;
}

.b2b-bulk-add-child-product {
    background: #F7F7F7;
    width: 32%;
}

.b2b-bulk-childProductname {
    color: #5A5A5A;
    font-size: 16px;
}

.b2b-bulk-quote-flex {
    display: flex;
    flex-wrap: wrap;
}

.b2b-bulk-quantity-input {
    width: 70px;
}

.b2b-bulk-attribute-input {
    width: 184px;
}

.b2b-bulk-savepopup-p {
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #000000;
    padding: 10px 10px;
}

.b2b-bulk-savepopup-productname {
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    padding: 0px 10px;
    color: #444444;
}

.b2b-bulk-save-popup-each-item {
    border-bottom: 1px solid #C9C9C9;
    padding: 14px 0;
}

.b2b-bulk-savepopup-action {
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #000000;
    text-align: center;
}

.b2b-bulk-savepopup-action-span {
    display: inline-block;
    background: #EEF4FF;
    padding: 3px 6px;
    border-radius: 5px;
}

.b2b-bulk-edit-popup-modal {
    width: 70%;
}

.b2b-bulkedit-add-child-description {
    min-height: 187px;
    line-height: 18px;
}

.b2b-bulkedit-addchildbtn {
    margin: 10px;
}

.b2b-bulk-edit-attr-category-heading {
    font-size: 16px;
    font-weight: 400;
    padding-left: 15px;
    color: #444444;
}

.b2b-bulk-savepopup-attr-name {
    margin-left: 10px;
    color: #444444;
    font-size: 12px;
    font-weight: 400;
}

.b2b-bulk-summary-popup-btn-brand {
    color: #fff;
}

.b2b-bulk-popover-body {
    line-height: 18px;
}

.b2b-bulk-child-products {
    display: flex;
    flex-wrap: wrap;
}

.b2b-bulk-quote-changed-attr-name {
    font-size: 12px;
    color: #444444;
    font-weight: 400;
}

.b2b-bulk-quote-changed-attr-value {
    font-size: 12px;
    color: #444444;
    font-weight: 700;
}

.b2b-bulk-edit-save-btn {
  color: #fff;
}

.b2b-table-actions{
    display: flex;
    align-items: center;
}

.b2b-icon-cell_wrapper{
  border: 1px solid #C9C9C9;
  border-radius: 4px;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.b2b-table-actions{
    display: flex;
    align-items: center;
}

.b2b-icon-cell_wrapper{
  border: 1px solid #C9C9C9;
  border-radius: 4px;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.b2b-cart-summary-icon-cell_wrapper{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 32px;
    height: 32px;
    background: #FFFFFF;
    border: 1px solid #C9C9C9;
    box-shadow: -1px 0px 0px #FFFFFF;
    border-radius: 0px 4px 4px 0px;
    align-self: center;
}

.b2b-cart-summary-title{
    width: 300px;
    height: 22px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
}

.b2b-spinner-large-brand-text{
    display:flex;
    justify-content:center;
    align-item:center;
}

.b2b-cart-summary-rightmost-button > button{
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: 0px;
}

.b2b-toast-message-wrapper {
    position: fixed;
    text-align: center;
    width: 100%;
    z-index: 9999;
}

.b2b-spinner-main-page .b2b-spinner-large-brand-text {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 26rem;
    z-index: 999999;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
}

.b2b-spinner-main-page .slds-spinner {
    top: 22rem;
}

.b2b-bulk-attr-toggle {
  display: inline-block;
}

.b2b-bulkedit-btn-popover {
  position: absolute;
  right: 103px;
  top: -46px;
}

.b2b-enterprise-order-popover-parent{
  position: absolute;
  bottom: -6.5rem;
  left: -5.5rem;
  width: 197px;
}

.b2b-bulk-edit-spinner-container {
  position: inherit; 
  height: inherit;
  padding: 2rem 0;
}

.b2b-bulk-edit-spinner-backdrop {
  background: #fff; 
  opacity: 0.8;
}

.b2b-bulk-edit-product-des-line {
  line-height: 18px;
}

.b2b-input [role=combobox] input[readonly], input[readonly][role=combobox] {
  color: #5C5C5C;
}

.b2b-enrich-order-button button {
  border-radius: 0 4px 4px 0;
}

.b2b-validate-button button {
  border-radius: 4px 0 0 4px;
}



