## 边框

* 内外边框

```css
// 外
box-sizing:content-box;
```

<div style="display:flex;">
  <div style="width:200px;
              height:200px;
              background-color:#fff;
              border:40px solid red;
              color:red;
              text-align:center;
              font-size:12px;">
              <p>默认box-sizing:content-box</p>
              <p>宽度200px</p>
              <p>高度200px</p>
  </div>
  <div style="margin-left:12px">
    <div style="width:40px;
                height:40px;
                background-color:yellow;
                color:red;
                text-align:center;">
                40px
    </div>
    <div style="width:40px;
                height:40px;
                background-color:cyan;
                color:red;
                text-align:center;">
                40px
    </div>
    <div style="width:40px;
                height:40px;
                background-color:yellow;
                color:red;
                text-align:center;">
                40px
    </div>
    <div style="width:40px;
                height:40px;
                background-color:cyan;
                color:red;
                text-align:center;">
                40px
    </div>
    <div style="width:40px;
                height:40px;
                background-color:yellow;
                color:red;
                text-align:center;">
                40px
    </div>
  </div>
  <div style="margin-left:100px;
              width:40px;
              height:40px;
              background-color:yellow;
                color:red;
                text-align:center;">
                40px
  </div>
  <span>每个点宽高是40px</span>
</div>

```css
// 内
box-sizing:border-box;
```

<div style="display:flex;">
  <div style="width:200px;
              height:200px;
              background-color:#fff;
              border:40px solid red;
              box-sizing:border-box;
              color:red;
              text-align:center;
              font-size:12px;">
              <p>box-sizing:border-box;</p>
              <p>宽度200px</p>
              <p>高度200px</p>
  </div>
  <div style="margin-left:12px">
    <div style="width:40px;
                height:40px;
                background-color:yellow;
                color:red;
                text-align:center;">
                40px
    </div>
    <div style="width:40px;
                height:40px;
                background-color:cyan;
                color:red;
                text-align:center;">
                40px
    </div>
    <div style="width:40px;
                height:40px;
                background-color:yellow;
                color:red;
                text-align:center;">
                40px
    </div>
    <div style="width:40px;
                height:40px;
                background-color:cyan;
                color:red;
                text-align:center;">
                40px
    </div>
    <div style="width:40px;
                height:40px;
                background-color:yellow;
                color:red;
                text-align:center;">
                40px
    </div>
  </div>
  <div style="margin-left:100px;
              width:40px;
              height:40px;
              background-color:yellow;
                color:red;
                text-align:center;">
                40px
  </div>
  <span>每个点宽高是40px</span>
</div>
