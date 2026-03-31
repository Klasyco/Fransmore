# Fransmore Supabase Menu Setup

1. Open your Supabase project dashboard.
2. Run the SQL in `supabase-setup.sql` inside the SQL editor.
3. Open `supabase-config.js` and paste:
   - your project URL into `url`
   - your anon public key into `anonKey`
   - keep `storageBucket` as `menu-products` unless you changed the SQL bucket name
4. Open `admin.html` in the browser.
5. Add products, upload images, and publish them.
6. Open `menu.html` to confirm the menu is now reading live products from Supabase and refreshing in realtime.

Notes:
- The public menu only reads products where `is_active = true`.
- The admin page shows both active products and drafts.
- The menu and admin pages now subscribe to Supabase realtime changes on `menu_products`.
- If Supabase is not configured or the request fails, `menu.html` falls back to the in-file product catalog.
- Authentication has been removed from the admin page, so anyone who can open `admin.html` can manage products with the current frontend credentials. Keep that page private or we should add a safer protection layer next.
