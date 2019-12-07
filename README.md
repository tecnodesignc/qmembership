## QBANNER  | 1.0.1

## Installation

`` npm i @imagina/qanner@1.0.1``

## API Routes

| ENTITY  | ROUTE |
| ------------- | ------------- |
| Position | positions |
| Banner | banners |
| Banner | orderBanners |


## Pages

- ### Back-End

  | PAGE | NAME |
  | ------------- | ------------- |
  | index | qbanner.admin.sliders |
  | showPosition | qbanner.admin.positions.show |
  | createBanner | qbanner.admin.banner.create |
  | updateBanner | qbanner.admin.banner.update |

## Usage

``` js
import qbanner from '@imagina/qbanner/_components/frontend/qbanner'

export default {
  ...
  components: {
   qbanner
  }
  ...
};
```

``` html
<qbanner systemName="home-1" height="500"/>
```

### Configuration

  | Property  | Type | Default |
  | ------------- | ------------- |------------- |
  |systemName  | String |null |
  | height | String | '500' |

