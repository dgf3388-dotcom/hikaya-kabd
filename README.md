# حكايات كبدة وسجق — الخبر

موقع تعريفي ثابت لمطعم **حكايات كبدة وسجق** في الخبر الشمالية.

- لا يحتاج Node.js ولا خادم خاص
- جاهز لـ **GitHub Pages** (رابط عام مجاني)
- يعمل أيضاً على Netlify / Cloudflare Pages / أي استضافة ملفات ثابتة

## الملفات

```text
index.html      الصفحة الرئيسية
styles.css      التصميم
app.js          التفاعل (المنيو، السلة، واتساب، النموذج)
photos/         صور المطعم
favicon.svg     أيقونة الموقع
og.jpg          صورة المشاركة
```

## النشر على GitHub Pages (الرابط العام)

### 1) أنشئ مستودعاً جديداً على GitHub

- ادخل [github.com/new](https://github.com/new)
- اسم مقترح: `hikayat-kabda`
- اختر **Public**
- لا تضف README من الواجهة (عندنا واحد جاهز)

### 2) ارفع الملفات

**من الموقع (أسهل):**

1. افتح المستودع → **Add file** → **Upload files**
2. اسحب كل محتويات هذا المجلد (وليس المجلد نفسه فقط إن أمكن)
3. تأكد أن `index.html` في **جذر** المستودع
4. Commit

**أو من الطرفية:**

```bash
git init
git add .
git commit -m "موقع حكايات كبدة وسجق"
git branch -M main
git remote add origin https://github.com/USERNAME/hikayat-kabda.git
git push -u origin main
```

استبدل `USERNAME` باسم حسابك.

### 3) فعّل Pages

1. **Settings** → **Pages**
2. تحت **Source**: اختر **Deploy from a branch**
3. Branch: **main** / مجلد: **/ (root)**
4. احفظ

خلال دقيقة أو دقيقتين يظهر الرابط:

```text
https://USERNAME.github.io/hikayat-kabda/
```

### 4) نطاق خاص (اختياري)

من نفس صفحة Pages يمكنك ربط دومين مثل `hikayat-kabda.com` بعد ضبط DNS عند مزوّد النطاق.

## التشغيل محلياً

افتح `index.html` في المتصفح، أو من الطرفية:

```bash
# Python
python3 -m http.server 8080

# أو Node
npx serve .
```

ثم افتح `http://localhost:8080`

## ملاحظات

- أرقام واتساب والعنوان داخل `app.js` و`index.html` — عدّلها إن تغيّرت.
- نموذج البريد يحفظ على جهاز الزائر فقط (localStorage)، وليس خادماً حقيقياً.
- الطلبات تُرسل عبر واتساب جاهزة النص.

---

© حكايات كبدة وسجق — الخبر
