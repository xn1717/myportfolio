# 陳宥諼 · Portfolio

個人作品集網頁——廣告 × AI 雙領域作品集。

## 檔案結構

```
.
├── index.html       # 主頁（含三個 Tab：About / Bio / Portfolio）
├── style.css        # 樣式
├── script.js        # Tab 切換、篩選、Modal
├── media/
│   ├── me.png             # ⚠️ 個人照片（請放入）
│   ├── poster-subtitle.png # 字幕自動化海報
│   └── poster-course.png   # 選課情報站海報
└── README.md
```

## 部署到 GitHub Pages

1. 在 GitHub 建立 repository（建議命名：`portfolio` 或 `username.github.io`）
2. 把所有檔案上傳到 repo
3. 進入 repo → Settings → Pages
4. Source 選 `Deploy from a branch`，Branch 選 `main` / `(root)`
5. 等 1-2 分鐘，網址會顯示在 Pages 頁面上

## 需要補充的內容

- [ ] `media/me.png`：個人照片（建議比例 4:5，去背或乾淨背景）
- [ ] 策略創意區塊的圖片（虎牌啤酒、周詮咖啡）——目前是 placeholder

## 補圖方式

把圖片放進 `media/` 資料夾後，編輯 `index.html` 中的策略創意區塊：

把這段：
```html
<div class="strategy-img placeholder">
  <span class="ph-label">Tiger 3×3 ｜ #一起無所畏</span>
  <span class="ph-hint">img placeholder · 補上廣告視覺</span>
</div>
```

替換成：
```html
<div class="strategy-img">
  <img src="media/tiger.png" alt="虎牌啤酒廣告">
</div>
```
