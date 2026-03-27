# Main Page Layout (ASCII)

Based on `web_page_example.png`.

```
+-----------------------------------------------------------------------+
|  [LOGO]  More Tea Community        HOME  CALENDAR  CONNECT  ABOUT  ARCHIVE |
+-----------------------------------------------------------------------+
|                                                                       |
|  +------------------------------------------------+  +-------------+ |
|  |                                                |  |             | |
|  |   [PHOTO - tea cup, wide banner]               |  | JOIN THE    | |
|  |                                                |  | GOOGLE GROUP| |
|  |   WEDNESDAYS AT UVIC ECS          (text on     |  |             | |
|  |   Community. Connection. And      photo)       |  | Stay in the | |
|  |   plenty of tea.                               |  | loop with   | |
|  |                          All are welcome...    |  | weekly tea  | |
|  +------------------------------------------------+  | updates...  | |
|                                                    |  |             | |
|  +------------------------------------------------+  | Name: ____  | |
|  | CALENDAR                          < March 2026>|  | Email: ____ | |
|  |----------------------------------------------- |  |             | |
|  | Sun  Mon  Tue  Wed  Thu  Fri  Sat  Sun         |  | [JOIN OUR   | |
|  |                1    2    3    4    5            |  |  COMMUNITY] | |
|  |  6    7    8  [9]  10   11   12                |  |             | |
|  | 13   14   15  [16] 17   18   19                |  | [FOLLOW US  | |
|  | 20   21   22  [23] 24   25   26   <- event     |  |  ON INSTA]  | |
|  | 27   28   29  [30] 31                          |  |             | |
|  |                                                |  +-------------+ |
|  |  (clicking event cell shows popup:)            |                  |
|  |  +-----------------------------+               |  +-------------+ |
|  |  | Tea Gathering               |               |  | ABOUT       | |
|  |  | ECS 6th Floor Lounge        |               |  |             | |
|  |  | Wed 4:00 PM - 6:00 PM       |               |  | [photo]     | |
|  |  | All students welcome...     |               |  |             | |
|  |  +-----------------------------+               |  | The ECS 6th | |
|  +------------------------------------------------+  | floor...    | |
|                                                    |  |             | |
|                                                    |  | Read more > | |
|                                                    |  +-------------+ |
+-----------------------------------------------------------------------+
|  UVIC ECS    Contact Us    Privacy Policy       (c) 2024 More Tea    |
+-----------------------------------------------------------------------+
```

## Column breakdown

```
+-----------------------------+  +------------------+
|  LEFT COLUMN (~70% width)   |  | RIGHT SIDEBAR    |
|                             |  | (~30% width)     |
|  1. Photo banner            |  |                  |
|     - full width of column  |  |  1. Join Google  |
|     - fixed height ~220px   |  |     Group card   |
|     - text overlay on photo |  |                  |
|                             |  |  2. About card   |
|  2. Calendar                |  |     with photo   |
|     - month grid            |  |     snippet      |
|     - event dots on Weddays |  |                  |
|     - click popup for detail|  |                  |
+-----------------------------+  +------------------+
```

## Mobile (stacked)

```
+---------------------------+
|  [LOGO] More Tea    [===] |   <- hamburger menu
+---------------------------+
| [PHOTO BANNER]            |
+---------------------------+
| CALENDAR                  |
| Sun Mon Tue Wed ...       |
| ...                       |
+---------------------------+
| JOIN THE GOOGLE GROUP     |
| Name: ___________         |
| Email: __________         |
| [JOIN OUR COMMUNITY]      |
| [FOLLOW ON INSTAGRAM]     |
+---------------------------+
| ABOUT                     |
| [photo]                   |
| text...  Read more >      |
+---------------------------+
| UVIC ECS | Contact | Priv |
+---------------------------+
```

## Notes for implementation

- Photo banner and sidebar are side by side on desktop, stacked on mobile
- Event days on the calendar are highlighted dark brown; today is gold
- Clicking a highlighted day opens a small floating popup with event details
- The sidebar is sticky on desktop (stays visible while scrolling calendar)
- All Wednesday dates have event dots beneath the day number
