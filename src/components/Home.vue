<template>

  <div class="inicio">
    <top-navbar ></top-navbar>
    <div class="columns is-centered is-hidden-touch">
      <div class="column is-one-third"></div>
      <div class="column is-three-fifths">
        <figure class="image">
            <img src="../assets/machiavelli-logo.png">
          </figure>
      </div>
      <div class="column"></div>
    </div>
    <div class="columns">
      <div class="column">
        <div v-show="this.display1750">
        <h1>Año 1750</h1>
      <div class="my-gallery" itemscope itemtype="http://schema.org/ImageGallery">
    <figure v-for="item in campanya_list[1750]" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
            <a :href="item.imagen" itemprop="contentUrl" data-size="3410x2168">
                <img :src="item.imagen" itemprop="thumbnail" :alt="item.titulo" />
            </a>
            <figcaption itemprop="caption description">{{item.titulo}}</figcaption>
      <p>{{item.titulo}}</p> 
    </figure>
  </div>    
    </div>

    <div v-show="this.display1751">
        <h1>Año 1751</h1>
      <div class="my-gallery" itemscope itemtype="http://schema.org/ImageGallery">
    <figure v-for="item in campanya_list[1751]" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
            <a :href="item.imagen" itemprop="contentUrl" data-size="3410x2168">
                <img :src="item.imagen" itemprop="thumbnail" :alt="item.titulo" />
            </a>
            <figcaption itemprop="caption description">{{item.titulo}}</figcaption>
      <p>{{item.titulo}}</p> 
    </figure>
  </div>    
    </div>

    <div v-show="this.display1752">
        <h1>Año 1752</h1>
      <div class="my-gallery" itemscope itemtype="http://schema.org/ImageGallery">
    <figure v-for="item in campanya_list[1752]" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
            <a :href="item.imagen" itemprop="contentUrl" data-size="3410x2168">
                <img :src="item.imagen" itemprop="thumbnail" :alt="item.titulo" />
            </a>
            <figcaption itemprop="caption description">{{item.titulo}}</figcaption>
      <p>{{item.titulo}}</p> 
    </figure>
  </div>    
    </div>

    <div v-show="this.display1753">
        <h1>Año 1753</h1>
      <div class="my-gallery" itemscope itemtype="http://schema.org/ImageGallery">
    <figure v-for="item in campanya_list[1753]" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
            <a :href="item.imagen" itemprop="contentUrl" data-size="3410x2168">
                <img :src="item.imagen" itemprop="thumbnail" :alt="item.titulo" />
            </a>
            <figcaption itemprop="caption description">{{item.titulo}}</figcaption>
      <p>{{item.titulo}}</p> 
    </figure>
  </div>    
    </div>

    <div v-show="this.display1754">
        <h1>Año 1754</h1>
      <div class="my-gallery" itemscope itemtype="http://schema.org/ImageGallery">
    <figure v-for="item in campanya_list[1754]" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
            <a :href="item.imagen" itemprop="contentUrl" data-size="3410x2168">
                <img :src="item.imagen" itemprop="thumbnail" :alt="item.titulo" />
            </a>
            <figcaption itemprop="caption description">{{item.titulo}}</figcaption>
      <p>{{item.titulo}}</p> 
    </figure>
  </div>    
    </div>

  </div>

        <!-- Root element of PhotoSwipe. Must have class pswp. -->

<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

    <!-- Background of PhotoSwipe. 
         It's a separate element as animating opacity is faster than rgba(). -->
    <div class="pswp__bg"></div>

    <!-- Slides wrapper with overflow:hidden. -->
    <div class="pswp__scroll-wrap">

        <!-- Container that holds slides. 
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
            Don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>

        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">

            <div class="pswp__top-bar">

                <!--  Controls are self-explanatory. Order can be changed. -->

                <div class="pswp__counter"></div>

                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                <button class="pswp__button pswp__button--share" title="Share"></button>

                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                <!-- element will get class pswp__preloader--active when preloader is running -->
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>

            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div> 
            </div>

            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>

            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>

            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>

        </div>

    </div>

</div> <!-- End PhotoSwipe -->
      </div>
    </div>

  </div>

</template>

<script>

import axios from "axios";
import _ from "underscore";
import TopNavbar from "@/components/UIComponents/TopNavbar.vue";

export default {
  components: {
    TopNavbar
  },
  name: 'HelloWorld',
  data: () => ({
    campanya_list: [],
    display1750: false,
    display1751: false,
    display1752: false,
    display1753: false,
    display1754: false,
    display1755: false,
    is_loaded: false
  }),
  mounted(){
    var settings = {
        async: true,
        crossDomain: true,
        url: "https://machiavelli1750-api.herokuapp.com/api/partidas/5a46d9b9803b830014eac2ba",
        //url: "http://localhost:9000/api/partidas/5a3c3e3c5b2d653b1c6507f0",
        method: "GET",
        headers: {
          "content-type": "application/json"
        },
        processData: false
        //data: JSON.stringify({ email: this.$store.getters.getUserEmail })
      };

      axios(settings)
        .then(
          (response) => {
            //console.log(`response.data: ${JSON.stringify(response.data)}`);
            this.campanya_list = _.groupBy(response.data.campanyas, "anyo");
            if(!_.isUndefined(this.campanya_list[1750]))
            {
                this.display1750 = true;
            }
            if(!_.isUndefined(this.campanya_list[1751]))
            {
                this.display1751 = true;
            }
            if(!_.isUndefined(this.campanya_list[1752]))
            {
                this.display1752 = true;
            }
            if(!_.isUndefined(this.campanya_list[1753]))
            {
                this.display1753 = true;
            }
            if(!_.isUndefined(this.campanya_list[1754]))
            {
                this.display1754 = true;
            }
            //console.log(`response.data: ${JSON.stringify(this.campanya_list["1751"], null, 4)}`)
            this.is_loaded = true;

            var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

// execute above function
initPhotoSwipeFromDOM('.my-gallery');

          }
        )
        .catch(
          (error) => {
            console.log(error);
          }
        );
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  padding-left: 20px;
  font-size: 2rem;
}
.my-gallery {
  width: 100%;
  float: left;
   padding-left: 20px;
}
.my-gallery img {
  width: 100%;
  height: auto;
}
.my-gallery figure {
  display: block;
  float: left;
  margin: 0 5px 5px 0;
  width: 200px;
}
.my-gallery figcaption {
  display: none;
}
.my-gallery p {
    font-size: 1.0rem;
    margin-top: -10px;
    color: #5f0912;
}
.image {
  width: 50%;
}
</style>
