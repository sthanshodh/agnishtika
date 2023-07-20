(function(){
    var script = {
 "downloadEnabled": false,
 "start": "this.init()",
 "horizontalAlign": "left",
 "children": [
  "this.MainViewer"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 136,
  "yaw": 0,
  "pitch": 5.14
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_540476A6_7538_719A_41DC_7411BDCF7190",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_540486A6_7538_719A_41D4_5E0FB89B5A28",
 "initialSequence": "this.sequence_540486A6_7538_719A_41D4_5E0FB89B5A28"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 109,
  "yaw": 7.35,
  "pitch": 2.2
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_54DDD7A8_7538_7F96_41D2_2245B3F13E76",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_54DDC7A8_7538_7F96_41D9_47BD058F4923",
 "initialSequence": "this.sequence_54DDC7A8_7538_7F96_41D9_47BD058F4923"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 132,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_54F3077C_7538_7F6E_41D0_9444C6FA47F3",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_54F3277C_7538_7F6E_41D5_03079BBD7656",
 "initialSequence": "this.sequence_54F3277C_7538_7F6E_41D5_03079BBD7656"
},
{
 "label": "04. Agnishtika 360 03",
 "hfovMin": "135%",
 "id": "panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230",
 "overlays": [
  "this.overlay_6851F41E_7518_B0AD_4186_2AD87F0195E4",
  "this.overlay_68DE85E0_7518_7396_41C6_C2DBA8088455",
  "this.overlay_6880C417_7528_50BA_41DB_9D8B4254225C",
  "this.overlay_6F87997A_7528_B36A_41B1_B3F6D834D854",
  "this.overlay_695D461C_7528_50AE_41AB_AF61A52D5A50",
  "this.overlay_69EDF489_752F_D196_41D5_A4011483F6E3"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF205AA_7318_B3EA_41B9_094276BD3878"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6A4998F2_7318_F17A_41BD_382D20E30746"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_t.jpg",
 "hfovMax": 150
},
{
 "class": "PlayList",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_6A4998F2_7318_F17A_41BD_382D20E30746",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6A4998F2_7318_F17A_41BD_382D20E30746_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_6BF205AA_7318_B3EA_41B9_094276BD3878",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134",
   "camera": "this.panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 132,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_camera",
 "manualRotationSpeed": 600,
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 136,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_camera",
 "manualRotationSpeed": 600,
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 136,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_547A46CA_7538_71AA_41CF_103C91D5FD2B",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_547A66CA_7538_71AA_41D2_6A909860D116",
 "initialSequence": "this.sequence_547A66CA_7538_71AA_41D2_6A909860D116"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 133,
  "yaw": -0.73,
  "pitch": 11.76
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_5568A811_7538_70B6_41B7_2C02024B2A14",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_5568D811_7538_70B6_41D4_03A7772A5082",
 "initialSequence": "this.sequence_5568D811_7538_70B6_41D4_03A7772A5082"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 127,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "panorama_6A4998F2_7318_F17A_41BD_382D20E30746_camera",
 "manualRotationSpeed": 600,
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_546E06BE_7538_71EA_419D_685DD71C5188",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_546E26BE_7538_71EA_41D9_2EBB91531423",
 "initialSequence": "this.sequence_546E26BE_7538_71EA_41D9_2EBB91531423"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 136,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_5437768F_7538_71AA_41B4_EFAA3AA01A45",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_5437668F_7538_71AA_41A9_3CA3D29E6253",
 "initialSequence": "this.sequence_5437668F_7538_71AA_41A9_3CA3D29E6253"
},
{
 "label": "04. Agnishtika 360 01",
 "hfovMin": "135%",
 "id": "panorama_6A4998F2_7318_F17A_41BD_382D20E30746",
 "overlays": [
  "this.overlay_6CDDDE1A_74E9_B0AA_41CA_99DD9F2CA50D",
  "this.overlay_6D48D197_74F8_B3BB_41A1_B76C1002FFAF",
  "this.overlay_6DA4637A_74F8_D775_41DA_C8EE899CD558"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_t.jpg",
 "hfovMax": 150
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_camera",
 "manualRotationSpeed": 600,
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 127,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_5481C73B_7538_70EA_41C2_6EAD2F751623",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_5481E73B_7538_70EA_41D4_F1C83F0599C3",
 "initialSequence": "this.sequence_5481E73B_7538_70EA_41D4_F1C83F0599C3"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 133,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_camera",
 "manualRotationSpeed": 600,
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 136,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_545786ED_7538_716E_41D7_9B427E3E788C",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_5457C6ED_7538_716E_41CD_7CDBCEAFF157",
 "initialSequence": "this.sequence_5457C6ED_7538_716E_41CD_7CDBCEAFF157"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 109,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_camera",
 "manualRotationSpeed": 600,
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 109,
  "yaw": 8.08,
  "pitch": 2.94
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_540D269B_7538_71AA_41BA_52466E6A5748",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_540D569B_7538_71AA_4196_36447DDC9C74",
 "initialSequence": "this.sequence_540D569B_7538_71AA_4196_36447DDC9C74"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 133,
  "yaw": -2.2,
  "pitch": 8.08
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_552DA7BE_7538_7FEA_418F_8D22092E6A8E",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_552DD7BE_7538_7FEA_41D0_903DB3FFCD7E",
 "initialSequence": "this.sequence_552DD7BE_7538_7FEA_41D0_903DB3FFCD7E"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 132,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_5411D6B2_7538_71FA_41C4_7E1DC5AE04E0",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_5411C6B2_7538_71FA_41DA_280C2BEA8859",
 "initialSequence": "this.sequence_5411C6B2_7538_71FA_41DA_280C2BEA8859"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 133,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_544576E1_7538_7196_4181_9CC41120C538",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_544596E1_7538_7196_41CA_0238A0DB312E",
 "initialSequence": "this.sequence_544596E1_7538_7196_41CA_0238A0DB312E"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 136,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_camera",
 "manualRotationSpeed": 600,
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 133,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_54E2D766_7538_709A_41D4_1E39E8CC75E3",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_54E2E766_7538_709A_41D4_FECDAEA60B6A",
 "initialSequence": "this.sequence_54E2E766_7538_709A_41D4_FECDAEA60B6A"
},
{
 "label": "04. Agnishtika 360 04",
 "hfovMin": "135%",
 "id": "panorama_6BF205AA_7318_B3EA_41B9_094276BD3878",
 "overlays": [
  "this.overlay_6A2AB26F_7528_F16A_41DB_08DCA6B838A2",
  "this.overlay_6B2D34C7_7528_519A_41BD_410C2F3DFA3D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_t.jpg",
 "hfovMax": 150
},
{
 "label": "04. Agnishtika 360 07",
 "hfovMin": "135%",
 "id": "panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C",
 "overlays": [
  "this.overlay_6EEABABA_74E8_71F5_41B0_9C634FEE0ABD",
  "this.overlay_6EABFE61_7518_D096_41AD_1C90F63C4503",
  "this.overlay_6858F1A3_7518_739A_41D5_EA2775D6338F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_t.jpg",
 "hfovMax": 150
},
{
 "label": "04. Agnishtika 360 02",
 "hfovMin": "135%",
 "id": "panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A",
 "overlays": [
  "this.overlay_6F8FD10A_7518_D0AA_41DC_73A4C8097C7B",
  "this.overlay_6EF5E289_7518_7196_41D1_E56F330A143E",
  "this.overlay_6F6B49C9_7519_B396_41A5_7A456C274275",
  "this.overlay_6F1807E2_7518_DF9A_41DD_068D691F6665"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6A4998F2_7318_F17A_41BD_382D20E30746"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_t.jpg",
 "hfovMax": 150
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": -1.47,
  "pitch": -5.14
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_5475B6D6_7538_71BA_41CA_85A2569F7676",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_5475F6D6_7538_71BA_41D7_97E11F4FDFE0",
 "initialSequence": "this.sequence_5475F6D6_7538_71BA_41D7_97E11F4FDFE0"
},
{
 "class": "PanoramaPlayer",
 "gyroscopeEnabled": true,
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_rotation"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 109,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_5492A751_7538_70B6_41D1_606A15AAD26F",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_5492D751_7538_70B6_41CF_9ADCA5151B79",
 "initialSequence": "this.sequence_5492D751_7538_70B6_41CF_9ADCA5151B79"
},
{
 "label": "04. Agnishtika 360 05",
 "hfovMin": "135%",
 "id": "panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134",
 "overlays": [
  "this.overlay_6A89F9B7_7528_73FA_41D0_064AB33AA0A9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF205AA_7318_B3EA_41B9_094276BD3878"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_t.jpg",
 "hfovMax": 150
},
{
 "label": "04. Agnishtika 360 06",
 "hfovMin": "135%",
 "id": "panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1",
 "overlays": [
  "this.overlay_6DB5B4D8_74E8_B1B6_41C0_315223EBD235",
  "this.overlay_6DEED622_74E8_B09A_41D9_815FAD97AE23",
  "this.overlay_6E4B3546_74E8_509D_41B6_3DF8BFBD1F29",
  "this.overlay_6B07EC10_7539_B0B5_41C9_37CD1BB57087"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6A4998F2_7318_F17A_41BD_382D20E30746"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_t.jpg",
 "hfovMax": 150
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 136,
  "yaw": 1.47,
  "pitch": 5.88
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_553E27CF_7538_7FAA_41CC_98CEB572697B",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_553E57CF_7538_7FAA_41D1_6D57B06FFDA5",
 "initialSequence": "this.sequence_553E57CF_7538_7FAA_41D1_6D57B06FFDA5"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 127,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_550E77E5_7538_7F9E_41D5_EAD095542DA9",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_550E67E5_7538_7F9E_41B6_BA51E4AF17C2",
 "initialSequence": "this.sequence_550E67E5_7538_7F9E_41B6_BA51E4AF17C2"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 132,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_54B04725_7538_709E_41B7_A2A344DE6003",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_54B07725_7538_709E_41B8_962FDBB16D1B",
 "initialSequence": "this.sequence_54B07725_7538_709E_41B8_962FDBB16D1B"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 109,
  "yaw": 8.82,
  "pitch": 5.14
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_551E47FB_7538_7F6A_41BD_572F10AA32F2",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_551E67FB_7538_7F6A_41C3_18D25836C69D",
 "initialSequence": "this.sequence_551E67FB_7538_7F6A_41C3_18D25836C69D"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 127,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_54C31792_7538_7FBA_41D6_436A2FE45BFA",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_54C33792_7538_7FBA_41C1_A0D48BD2899A",
 "initialSequence": "this.sequence_54C33792_7538_7FBA_41C1_A0D48BD2899A"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 136,
  "yaw": 0,
  "pitch": 0
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_54A7E70F_7538_70AA_4190_F039AF70879E",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_54A6070F_7538_70AA_41DA_F81CB04B2DB5",
 "initialSequence": "this.sequence_54A6070F_7538_70AA_41DA_F81CB04B2DB5"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 132,
  "yaw": 0,
  "pitch": 5.14
 },
 "timeToIdle": 5000,
 "automaticZoomSpeed": 10,
 "id": "camera_5578A826_7538_709A_41CD_4249DFD25063",
 "manualRotationSpeed": 600,
 "idleSequence": "this.sequence_5578C826_7538_709A_41D4_DEC89CFE2AFB",
 "initialSequence": "this.sequence_5578C826_7538_709A_41D4_DEC89CFE2AFB"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MainViewer",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "progressBottom": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeight": 10,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_540486A6_7538_719A_41D4_5E0FB89B5A28",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_54DDC7A8_7538_7F96_41D9_47BD058F4923",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_54F3277C_7538_7F6E_41D5_03079BBD7656",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A, this.camera_54A7E70F_7538_70AA_4190_F039AF70879E); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.82,
   "hfov": 23.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.32
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_519DFC77_7538_717A_41CC_466DAE5819AA",
   "pitch": -9.32,
   "yaw": -51.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.09,
   "distance": 100
  }
 ],
 "id": "overlay_6851F41E_7518_B0AD_4186_2AD87F0195E4",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C, this.camera_544576E1_7538_7196_4181_9CC41120C538); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.08,
   "hfov": 13.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.82
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_519E2C77_7538_717A_41B9_FDD3BE5AC664",
   "pitch": -33.82,
   "yaw": 105.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.29,
   "distance": 100
  }
 ],
 "id": "overlay_68DE85E0_7518_7396_41C6_C2DBA8088455",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1, this.camera_54B04725_7538_709E_41B7_A2A344DE6003); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 130,
   "hfov": 8.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.91
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_519E9C77_7538_717A_41DA_2062029D0A1B",
   "pitch": -35.91,
   "yaw": 130,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.32,
   "distance": 100
  }
 ],
 "id": "overlay_6880C417_7528_50BA_41DB_9D8B4254225C",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6A4998F2_7318_F17A_41BD_382D20E30746, this.camera_5481C73B_7538_70EA_41C2_6EAD2F751623); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.26,
   "hfov": 11.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.83
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_519ECC77_7538_717A_41C8_6362A7C83F3F",
   "pitch": -10.83,
   "yaw": 133.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.23,
   "distance": 100
  }
 ],
 "id": "overlay_6F87997A_7528_B36A_41B1_B3F6D834D854",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BF205AA_7318_B3EA_41B9_094276BD3878, this.camera_545786ED_7538_716E_41D7_9B427E3E788C); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.48,
   "hfov": 7.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.6
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_519F3C77_7538_717A_41D5_26765922A1B5",
   "pitch": -3.6,
   "yaw": 13.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.62,
   "distance": 100
  }
 ],
 "id": "overlay_695D461C_7528_50AE_41AB_AF61A52D5A50",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134, this.camera_5475B6D6_7538_71BA_41CA_85A2569F7676); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.53,
   "hfov": 5.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.7
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_519F6C78_7538_7176_41DB_D8695E082D8E",
   "pitch": 4.7,
   "yaw": 2.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.74,
   "distance": 100
  }
 ],
 "id": "overlay_69EDF489_752F_D196_41D5_A4011483F6E3",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_547A66CA_7538_71AA_41D2_6A909860D116",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_5568D811_7538_70B6_41D4_03A7772A5082",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_546E26BE_7538_71EA_41D9_2EBB91531423",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_5437668F_7538_71AA_41A9_3CA3D29E6253",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1, this.camera_5578A826_7538_709A_41CD_4249DFD25063); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.2,
   "hfov": 7.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.4
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_682F2910_74FF_D0B6_41D7_858EA6283981",
   "pitch": -8.4,
   "yaw": -11.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.79,
   "distance": 100
  }
 ],
 "id": "overlay_6CDDDE1A_74E9_B0AA_41CA_99DD9F2CA50D",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C, this.camera_5568A811_7538_70B6_41B7_2C02024B2A14); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.52,
   "hfov": 6.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.38
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_682E4910_74FF_D0B6_41CE_49A402673856",
   "pitch": -0.38,
   "yaw": 3.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.56,
   "distance": 100
  }
 ],
 "id": "overlay_6D48D197_74F8_B3BB_41A1_B76C1002FFAF",
 "data": {
  "label": "Circle 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230, this.camera_551E47FB_7538_7F6A_41BD_572F10AA32F2); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8,
   "hfov": 4.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 24,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.43
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -8,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 90,
      "height": 59
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.43,
   "hfov": 4.31
  }
 ],
 "id": "overlay_6DA4637A_74F8_D775_41DA_C8EE899CD558",
 "data": {
  "label": "Image"
 }
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_5481E73B_7538_70EA_41D4_F1C83F0599C3",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_5457C6ED_7538_716E_41CD_7CDBCEAFF157",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_540D569B_7538_71AA_4196_36447DDC9C74",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_552DD7BE_7538_7FEA_41D0_903DB3FFCD7E",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_5411C6B2_7538_71FA_41DA_280C2BEA8859",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_544596E1_7538_7196_41CA_0238A0DB312E",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_54E2E766_7538_709A_41D4_FECDAEA60B6A",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A, this.camera_547A46CA_7538_71AA_41CF_103C91D5FD2B); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.4,
   "hfov": 7.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.21
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_519FFC78_7538_7176_41A7_A14B2C17396C",
   "pitch": -8.21,
   "yaw": 49.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.15,
   "distance": 100
  }
 ],
 "id": "overlay_6A2AB26F_7528_F16A_41DB_08DCA6B838A2",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134, this.camera_546E06BE_7538_71EA_419D_685DD71C5188); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.55,
   "hfov": 12.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.08
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_51903C78_7538_7176_4190_167031AA80D8",
   "pitch": 8.08,
   "yaw": 157.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.64,
   "distance": 50
  }
 ],
 "id": "overlay_6B2D34C7_7528_519A_41BD_410C2F3DFA3D",
 "data": {
  "label": "Arrow 06a Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1, this.camera_5411D6B2_7538_71FA_41C4_7E1DC5AE04E0); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.51,
   "hfov": 8.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.31
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_519BDC76_7538_717A_41D4_509F84F906DB",
   "pitch": -45.31,
   "yaw": -96.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.44,
   "distance": 100
  }
 ],
 "id": "overlay_6EEABABA_74E8_71F5_41B0_9C634FEE0ABD",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230, this.camera_540D269B_7538_71AA_41BA_52466E6A5748); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.35,
   "hfov": 12.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.21
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_519C1C76_7538_717A_41D4_85BF2028CE95",
   "pitch": 7.21,
   "yaw": -18.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.34,
   "distance": 50
  }
 ],
 "id": "overlay_6EABFE61_7518_D096_41AD_1C90F63C4503",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A, this.camera_540476A6_7538_719A_41DC_7411BDCF7190); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.37,
   "hfov": 7.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.99
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_519C7C76_7538_717A_41DC_67BF5A082DB0",
   "pitch": 14.99,
   "yaw": -17.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.35,
   "distance": 50
  }
 ],
 "id": "overlay_6858F1A3_7518_739A_41D5_EA2775D6338F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C, this.camera_54E2D766_7538_709A_41D4_1E39E8CC75E3); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.89,
   "hfov": 8.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.17
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_519CAC76_7538_717A_41DC_191F050B3B97",
   "pitch": -25.17,
   "yaw": 30.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.36,
   "distance": 100
  }
 ],
 "id": "overlay_6F8FD10A_7518_D0AA_41DC_73A4C8097C7B",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1, this.camera_54F3077C_7538_7F6E_41D0_9444C6FA47F3); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.48,
   "hfov": 8.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.22
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_519D1C77_7538_717A_41B9_597FB3765430",
   "pitch": -26.22,
   "yaw": 42.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.29,
   "distance": 100
  }
 ],
 "id": "overlay_6EF5E289_7518_7196_41D1_E56F330A143E",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6A4998F2_7318_F17A_41BD_382D20E30746, this.camera_54C31792_7538_7FBA_41D6_436A2FE45BFA); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.79,
   "hfov": 9.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.48
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_519D2C77_7538_717A_41B6_80B910D42239",
   "pitch": -11.48,
   "yaw": 42.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.05,
   "distance": 100
  }
 ],
 "id": "overlay_6F6B49C9_7519_B396_41A5_7A456C274275",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230, this.camera_5492A751_7538_70B6_41D1_606A15AAD26F); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 41.4,
   "hfov": 7.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.51
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_519DBC77_7538_717A_4173_ADD02DF75354",
   "pitch": -33.51,
   "yaw": 41.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.7,
   "distance": 100
  }
 ],
 "id": "overlay_6F1807E2_7518_DF9A_41DD_068D691F6665",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_5475F6D6_7538_71BA_41D7_97E11F4FDFE0",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_5492D751_7538_70B6_41CF_9ADCA5151B79",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BF205AA_7318_B3EA_41B9_094276BD3878, this.camera_5437768F_7538_71AA_41B4_EFAA3AA01A45); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.87,
   "hfov": 6.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.51
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_51906C78_7538_7176_40C6_7FBCF3A65000",
   "pitch": -22.51,
   "yaw": -12.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.79,
   "distance": 100
  }
 ],
 "id": "overlay_6A89F9B7_7528_73FA_41D0_064AB33AA0A9",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C, this.camera_552DA7BE_7538_7FEA_418F_8D22092E6A8E); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.7,
   "hfov": 9.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.03
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_519ACC75_7538_717E_41DB_81752A00D8FD",
   "pitch": -39.03,
   "yaw": -15.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.32,
   "distance": 100
  }
 ],
 "id": "overlay_6DB5B4D8_74E8_B1B6_41C0_315223EBD235",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230, this.camera_54DDD7A8_7538_7F96_41D2_2245B3F13E76); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.39,
   "hfov": 7.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.52
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_519B3C76_7538_717A_41D4_348E57383C12",
   "pitch": -10.52,
   "yaw": -19.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.75,
   "distance": 100
  }
 ],
 "id": "overlay_6DEED622_74E8_B09A_41D9_815FAD97AE23",
 "data": {
  "label": "Circle Point 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A, this.camera_553E27CF_7538_7FAA_41CC_98CEB572697B); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.53,
   "hfov": 5.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.6
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_519B9C76_7538_717A_41C9_EC9D2CA0E129",
   "pitch": -1.6,
   "yaw": -16.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.03,
   "distance": 100
  }
 ],
 "id": "overlay_6E4B3546_74E8_509D_41B6_3DF8BFBD1F29",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6A4998F2_7318_F17A_41BD_382D20E30746, this.camera_550E77E5_7538_7F9E_41D5_EAD095542DA9); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.41,
   "hfov": 17.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.94
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_6AE0AE03_7538_F09A_41A4_AB6A8D39AEE7",
   "pitch": -42.94,
   "yaw": 158.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.54,
   "distance": 100
  }
 ],
 "id": "overlay_6B07EC10_7539_B0B5_41C9_37CD1BB57087",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_553E57CF_7538_7FAA_41D1_6D57B06FFDA5",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_550E67E5_7538_7F9E_41B6_BA51E4AF17C2",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_54B07725_7538_709E_41B8_962FDBB16D1B",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_551E67FB_7538_7F6A_41C3_18D25836C69D",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_54C33792_7538_7FBA_41C1_A0D48BD2899A",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_54A6070F_7538_70AA_41DA_F81CB04B2DB5",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_5578C826_7538_709A_41D4_DEC89CFE2AFB",
 "restartMovementOnUserInteraction": false
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_519DFC77_7538_717A_41CC_466DAE5819AA",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_519E2C77_7538_717A_41B9_FDD3BE5AC664",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_519E9C77_7538_717A_41DA_2062029D0A1B",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_519ECC77_7538_717A_41C8_6362A7C83F3F",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_519F3C77_7538_717A_41D5_26765922A1B5",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BED3C59_7318_D0B7_41D1_B8C40B7E6230_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_519F6C78_7538_7176_41DB_D8695E082D8E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_682F2910_74FF_D0B6_41D7_858EA6283981",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6A4998F2_7318_F17A_41BD_382D20E30746_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_682E4910_74FF_D0B6_41CE_49A402673856",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_519FFC78_7538_7176_41A7_A14B2C17396C",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF205AA_7318_B3EA_41B9_094276BD3878_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51903C78_7538_7176_4190_167031AA80D8",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_519BDC76_7538_717A_41D4_509F84F906DB",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_519C1C76_7538_717A_41D4_85BF2028CE95",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF9C20E_7318_70AA_41BA_72DEFEF5EF8C_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_519C7C76_7538_717A_41DC_67BF5A082DB0",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_519CAC76_7538_717A_41DC_191F050B3B97",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_519D1C77_7538_717A_41B9_597FB3765430",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_519D2C77_7538_717A_41B6_80B910D42239",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF17296_7318_D1BA_41D3_EE9668AD800A_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_519DBC77_7538_717A_4173_ADD02DF75354",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF99F0E_7318_B0AA_41D2_D0AFBF3D8134_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_51906C78_7538_7176_40C6_7FBCF3A65000",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_519ACC75_7538_717E_41DB_81752A00D8FD",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_519B3C76_7538_717A_41D4_348E57383C12",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_519B9C76_7538_717A_41C9_EC9D2CA0E129",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6BF0283A_7318_50EA_41C1_1065A9D750E1_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6AE0AE03_7538_F09A_41A4_AB6A8D39AEE7",
 "frameCount": 22
}],
 "mobileMipmappingEnabled": false,
 "propagateClick": false,
 "vrPolyfillScale": 1,
 "minWidth": 20,
 "height": "100%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "class": "Player",
 "scripts": {
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "existsKey": function(key){  return key in window; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getKey": function(key){  return window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); }
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "data": {
  "name": "Player29038"
 },
 "defaultVRPointer": "laser",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
