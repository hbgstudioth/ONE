# ONE Surgery Sales Dashboard By Hambg.

Dashboard ยอดขายและ Booking ที่ดึงข้อมูลสดจาก Google Sheet
(ชีท `Prospect MMM YYYY` ทุกเดือน และชีท `Input Revenue`)

## ไฟล์ใน repo

| ไฟล์ | หน้าที่ |
|---|---|
| `index.html` | ตัว Dashboard ทั้งหมด (HTML + CSS + JS ในไฟล์เดียว) |
| `.nojekyll` | บอก GitHub Pages ให้เสิร์ฟไฟล์ตรง ๆ ไม่ต้องแปลงด้วย Jekyll |
| `README.md` | ไฟล์นี้ |

## วิธีขึ้น GitHub Pages

1. สร้าง repository ใหม่บน GitHub เช่น `prospect-dashboard`
2. กด **Add file › Upload files** แล้วลากไฟล์ทั้ง 3 ไฟล์ขึ้นไป จากนั้นกด **Commit changes**
3. ไปที่ **Settings › Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / โฟลเดอร์ **/ (root)** แล้วกด **Save**
4. รอประมาณ 1–2 นาที จะได้ลิงก์รูปแบบ
   `https://<ชื่อผู้ใช้>.github.io/prospect-dashboard/`

## ตั้งค่า Google Sheet

- แชร์ไฟล์แบบ **ทุกคนที่มีลิงก์ – ผู้มีสิทธิ์อ่าน** (Share › General access › Anyone with the link › Viewer)
- Sheet ID ตั้งไว้ในไฟล์แล้ว ถ้าเปลี่ยนไฟล์ ให้แก้ที่ปุ่ม ⚙ มุมขวาบนของ Dashboard
  หรือแก้ค่า `sheetId` ใน `DEFAULT_CFG` ใน `index.html`
- ชื่อแท็บรายเดือนใช้รูปแบบ `Prospect SEP 2026` หรือ `Prospect Aug 2026` ได้ทั้งคู่
  ระบบจะค้นหาย้อนหลัง 12 เดือนให้อัตโนมัติ

## แถวที่ซ่อนในชีท Input Revenue

เวอร์ชันบน GitHub อ่านข้อมูลผ่านลิงก์สาธารณะของ Google Sheet
ซึ่ง **ไม่ส่งแถวที่ถูกซ่อนด้วยตัวกรอง** ออกมา เลือกแก้ได้ 1 ทาง

**ทางที่ 1 (แนะนำ ไม่ต้องตั้งค่าอะไรเพิ่ม)**
สร้างแท็บใหม่ชื่อ `Input Revenue Data` แล้วพิมพ์ในช่อง A1:

```
={'Input Revenue'!A:H}
```

Dashboard จะเจอแท็บนี้เองและใช้ข้อมูลจากแท็บนี้แทน

**ทางที่ 2**
ใส่ Google API key ที่ ⚙ ตั้งค่า (เปิดใช้ Google Sheets API ใน Google Cloud Console)
ควร **จำกัด key ให้ใช้ได้เฉพาะเว็บไซต์ของคุณ**
(API restrictions: Google Sheets API, Website restrictions: `https://<ชื่อผู้ใช้>.github.io/*`)
เพราะ key จะเก็บไว้ในเบราว์เซอร์ของผู้ใช้

## ข้อควรระวังเรื่องข้อมูล

- GitHub Pages บนแพ็กเกจฟรีต้องใช้ repo แบบ **Public**
  และใครก็ตามที่มีลิงก์เว็บจะเปิดดู Dashboard ได้
- Dashboard แสดงชื่อลูกค้า, HN และหัตถการ
  ตัวไฟล์ใน repo ไม่มีข้อมูลลูกค้าเก็บไว้ (ดึงสดจาก Google Sheet ทุกครั้ง)
  แต่ผู้ที่มีลิงก์เว็บจะเห็นข้อมูลเหล่านี้
- ถ้าต้องการจำกัดคนดู ให้ใช้ GitHub Pages แบบ private (GitHub Enterprise)
  หรือใช้เวอร์ชันบน claude.ai ที่เห็นเฉพาะคนที่ได้รับแชร์

## อัปเดตเวอร์ชัน

แทนที่ `index.html` ใน repo ด้วยไฟล์ใหม่ แล้วกด Commit
GitHub Pages จะอัปเดตเองภายใน 1–2 นาที

## คีย์ลัด

| ปุ่ม | ทำอะไร |
|---|---|
| `R` | รีเฟรชข้อมูล |
| `1`–`4` | เดือนนี้ / เดือนที่แล้ว / 3 เดือน / ทั้งหมด |
| `W` | สลับสัปดาห์ถัดไป |
| `[` `]` | เปลี่ยนหน้า |
| `D` | โหมดมืด/สว่าง |
| `/` | ค้นหาลูกค้า |
