const WHATSAPP_NUMBER = "2348058329165";
const ADMIN_EMAIL = "fransmore2017@gmail.com";
const GENERIC_ORDER_MESSAGE = "Hi Fransmore! 👋 I'd like to place an order.";
const CATERING_INQUIRY_MESSAGE = "Hi! I'd like to inquire about catering for an event.";
const SERVICE_INQUIRY_MESSAGE = "Hi Fransmore! 👋 I'd like to inquire about your services.";
const SUPABASE_MENU_TABLE = "menu_products";
const DEFAULT_MENU_IMAGE = "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=1200";
const MENU_SYNC_EVENT_KEY = "fransmore_menu_sync";

const fallbackProducts = [
    { id: 1, name: "Vanilla Velvet Custom Cake", type: "cakes", collection: "celebration-cakes", occasion: ["parties-events"], orderStyle: "custom-order", method: "baked", volume: ["family-pack"], bestsellers: ["oby-special"], short: "Moist vanilla sponge layered with silky buttercream for birthdays and intimate celebrations.", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=1200" },
    { id: 2, name: "Birthday Bloom Cake", type: "cakes", collection: "celebration-cakes", occasion: ["parties-events"], orderStyle: "custom-order", method: "baked", volume: ["family-pack"], bestsellers: ["lagos-favorites"], short: "A floral birthday centerpiece finished with smooth icing and elegant piping.", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=1200" },
    { id: 3, name: "Mini Luxe Cake", type: "cakes", collection: "celebration-cakes", occasion: ["daily-cravings", "gift-boxes"], orderStyle: "custom-order", method: "baked", volume: ["individual"], bestsellers: ["oby-special"], short: "A small-but-special cake for surprise gifting, date nights, or personal indulgence.", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=1200" },
    { id: 4, name: "Home Kitchen Meat Pie", type: "snacks", collection: "fresh-pastries", occasion: ["daily-cravings", "breakfast-brunch"], orderStyle: "ready-to-eat", method: "baked", volume: ["individual"], bestsellers: ["lagos-favorites"], short: "Golden pastry with a rich savory filling, baked the home-kitchen way.", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=1200" },
    { id: 5, name: "Butter Sausage Roll", type: "snacks", collection: "fresh-pastries", occasion: ["daily-cravings", "breakfast-brunch"], orderStyle: "ready-to-eat", method: "baked", volume: ["individual"], bestsellers: ["lagos-favorites"], short: "Flaky pastry wrapped around a juicy sausage for easy breakfast and brunch runs.", img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=1200" },
    { id: 6, name: "Velvet Donut Box", type: "snacks", collection: "fresh-pastries", occasion: ["daily-cravings", "breakfast-brunch", "gift-boxes"], orderStyle: "ready-to-eat", method: "fried", volume: ["family-pack"], bestsellers: ["oby-special"], short: "Soft donuts finished with a bakery glaze, perfect for sharing over coffee.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200" },
    { id: 7, name: "Oby's Cookie Tin", type: "snacks", collection: "fresh-pastries", occasion: ["daily-cravings", "gift-boxes"], orderStyle: "ready-to-eat", method: "baked", volume: ["family-pack"], bestsellers: ["oby-special"], short: "Buttery cookies packed in a keepsake tin for gifting and after-dinner treats.", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=1200" },
    { id: 8, name: "Golden Chinchin", type: "snacks", collection: "crunchy-snacks", occasion: ["daily-cravings", "parties-events"], orderStyle: "ready-to-eat", method: "fried", preferences: ["traditional-flavors"], volume: ["small-jar", "large-jar", "wholesale"], bestsellers: ["lagos-favorites"], short: "The signature traditional chinchin with a deep golden crunch and gentle sweetness.", img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=1200" },
    { id: 9, name: "Baked Chinchin Crunch", type: "snacks", collection: "crunchy-snacks", occasion: ["daily-cravings", "gift-boxes"], orderStyle: "ready-to-eat", method: "baked", preferences: ["traditional-flavors"], volume: ["small-jar", "large-jar", "wholesale"], bestsellers: ["oby-special"], short: "A lighter baked chinchin with the same home-style snap customers keep coming back for.", img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&q=80&w=1200" },
    { id: 10, name: "Plantain Chips Jar", type: "snacks", collection: "crunchy-snacks", occasion: ["daily-cravings", "parties-events"], orderStyle: "ready-to-eat", method: "fried", preferences: ["traditional-flavors"], volume: ["small-jar", "large-jar", "wholesale"], bestsellers: ["lagos-favorites"], short: "Crisp plantain chips with a salty-satisfying bite made for easy snacking and sharing.", img: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&q=80&w=1200" },
    { id: 11, name: "Roasted Peanuts Jar", type: "snacks", collection: "crunchy-snacks", occasion: ["daily-cravings", "gift-boxes"], orderStyle: "ready-to-eat", method: "baked", volume: ["small-jar", "large-jar", "wholesale"], bestsellers: ["lagos-favorites"], short: "Roasted peanuts portioned for desk snacks, road trips, and bundle gifting.", img: "https://images.unsplash.com/photo-1509358273861-04e231706adf?auto=format&fit=crop&q=80&w=1200" },
    { id: 12, name: "Kitchen Granola Jar", type: "snacks", collection: "crunchy-snacks", occasion: ["breakfast-brunch", "gift-boxes"], orderStyle: "ready-to-eat", method: "baked", preferences: ["sugar-wise"], volume: ["small-jar", "large-jar", "wholesale"], bestsellers: ["oby-special"], short: "Oven-baked granola with nuts and seeds for breakfast prep or wholesome gifting.", img: "https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?auto=format&fit=crop&q=80&w=1200" },
    { id: 13, name: "Signature Fruit Parfait", type: "parfaits", collection: "healthy-bowls", occasion: ["daily-cravings", "breakfast-brunch"], orderStyle: "ready-to-eat", volume: ["individual"], bestsellers: ["oby-special"], short: "Silky yogurt layered with fruit and granola for a fresh, chilled pick-me-up.", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1200" },
    { id: 14, name: "Nut Crunch Parfait", type: "parfaits", collection: "healthy-bowls", occasion: ["breakfast-brunch"], orderStyle: "ready-to-eat", preferences: ["sugar-wise"], volume: ["individual"], bestsellers: ["lagos-favorites"], short: "A protein-friendly parfait built with nut layers, creamy yogurt, and gentle sweetness.", img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&q=80&w=1200" },
    { id: 15, name: "Creamy Bliss Parfait", type: "parfaits", collection: "healthy-bowls", occasion: ["daily-cravings", "breakfast-brunch"], orderStyle: "ready-to-eat", volume: ["individual"], bestsellers: ["oby-special"], short: "An indulgent chilled parfait for anyone craving a dessert-leaning breakfast bowl.", img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=1200" },
    { id: 16, name: "Granola Power Bowl", type: "parfaits", collection: "healthy-bowls", occasion: ["breakfast-brunch"], orderStyle: "ready-to-eat", preferences: ["sugar-wise"], volume: ["individual"], bestsellers: ["oby-special"], short: "Crunchy granola, fruit, and yogurt balanced for a lighter breakfast or brunch stop.", img: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&q=80&w=1200" },
    { id: 17, name: "Heritage Zobo", type: "drinks", collection: "chilled-drinks", occasion: ["daily-cravings", "parties-events"], orderStyle: "ready-to-eat", preferences: ["traditional-flavors"], volume: ["individual", "family-pack", "wholesale"], bestsellers: ["lagos-favorites"], short: "A chilled zobo drink with familiar local spice notes and a refreshing finish.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=1200" },
    { id: 18, name: "Fresh Yogurt Cup", type: "drinks", collection: "chilled-drinks", occasion: ["daily-cravings", "breakfast-brunch"], orderStyle: "ready-to-eat", volume: ["individual"], bestsellers: ["oby-special"], short: "Smooth fresh yogurt served chilled for grab-and-go breakfast and afternoon cool downs.", img: "https://images.unsplash.com/photo-1571212515416-fca88b9721a1?auto=format&fit=crop&q=80&w=1200" },
    { id: 19, name: "Unsweetened Yogurt Bottle", type: "drinks", collection: "chilled-drinks", occasion: ["breakfast-brunch"], orderStyle: "ready-to-eat", preferences: ["sugar-wise"], volume: ["family-pack"], bestsellers: ["oby-special"], short: "A sugar-wise yogurt bottle for homes that want clean flavor and flexible serving sizes.", img: "https://images.unsplash.com/photo-1551024709-8f23befc6cf7?auto=format&fit=crop&q=80&w=1200" },
    { id: 20, name: "Party Small Chops Tray", type: "snacks", collection: "fresh-pastries", occasion: ["parties-events"], orderStyle: "ready-to-eat", method: "fried", volume: ["family-pack", "wholesale"], bestsellers: ["lagos-favorites"], short: "Puff-puff, samosa, and event-ready bites for birthdays, office trays, and gatherings.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200" },
    { id: 21, name: "Oby's Gift Box", type: "snacks", collection: "fresh-pastries", occasion: ["gift-boxes"], orderStyle: "ready-to-eat", method: "baked", volume: ["family-pack"], bestsellers: ["oby-special"], short: "A curated box of cookies, granola, and pastry favorites packed for thoughtful gifting.", img: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=1200" }
];

let products = [];
let supabaseClient = null;
let menuDataLoadedFromSupabase = false;
let adminEditingId = null;
let menuRealtimeChannel = null;
let adminRealtimeChannel = null;
let menuSyncChannel = null;
let menuSyncSubscribed = false;
let productCardCloseTimer = null;
let menuSearchDebounceTimer = null;
let menuSyncPromise = null;
let menuShuffleSeed = "";
let menuShuffleDayKey = "";

const filterGroups = [
    { key: "type", label: "Type", description: "Start with the treat itself.", options: [{ value: "cakes", label: "Cakes" }, { value: "snacks", label: "Snacks" }, { value: "drinks", label: "Drinks" }, { value: "parfaits", label: "Parfaits" }] },
    { key: "collection", label: "Kitchen Collections", description: "Separate ready-to-eat favorites from custom celebrations.", options: [{ value: "celebration-cakes", label: "Celebration Cakes" }, { value: "fresh-pastries", label: "Fresh Pastries" }, { value: "crunchy-snacks", label: "Crunchy Snacks" }, { value: "healthy-bowls", label: "Healthy Bowls" }, { value: "chilled-drinks", label: "Chilled Drinks" }] },
    { key: "occasion", label: "Occasion", description: "Shop by the moment you are feeding.", options: [{ value: "daily-cravings", label: "Daily Cravings" }, { value: "breakfast-brunch", label: "Breakfast & Brunch" }, { value: "parties-events", label: "Parties & Events" }, { value: "gift-boxes", label: "Gift Boxes" }] },
    { key: "orderStyle", label: "Order Style", description: "Quick pickups or custom celebration planning.", options: [{ value: "ready-to-eat", label: "Ready-to-Eat" }, { value: "custom-order", label: "Custom-Order" }] },
    { key: "method", label: "Method", description: "Especially helpful for the chinchin crunch factor.", options: [{ value: "fried", label: "Fried" }, { value: "baked", label: "Baked" }] },
    { key: "preferences", label: "Home Kitchen Notes", description: "Health-conscious and traditional flavor cues.", options: [{ value: "sugar-wise", label: "Sugar-Wise" }, { value: "traditional-flavors", label: "Traditional Flavors" }] },
    { key: "volume", label: "Volume", description: "Singles, jars, family packs, or bulk supply.", options: [{ value: "individual", label: "Individual" }, { value: "small-jar", label: "Small Jar" }, { value: "large-jar", label: "Large Jar" }, { value: "family-pack", label: "Family Pack" }, { value: "wholesale", label: "Wholesale/Bulk" }] },
    { key: "bestsellers", label: "Bestsellers", description: "Highlight house signatures and customer favorites.", options: [{ value: "oby-special", label: "Oby's Special" }, { value: "lagos-favorites", label: "Customer Favorites" }] }
];

const filterLabelMap = filterGroups.reduce((lookup, group) => {
    lookup[group.key] = group.options.reduce((acc, option) => {
        acc[option.value] = option.label;
        return acc;
    }, {});
    return lookup;
}, {});

const typeSpecificVisibleFilterGroups = {
    cakes: new Set(["type", "collection", "occasion", "orderStyle", "bestsellers"]),
    snacks: new Set(["type", "collection", "orderStyle", "method", "preferences", "volume", "bestsellers"]),
    drinks: new Set(["type", "collection", "orderStyle", "preferences", "volume", "bestsellers"]),
    parfaits: new Set(["type", "collection", "orderStyle", "preferences", "volume", "bestsellers"])
};

const menuViews = {
    all: { title: "The Menu", summary: "Browse ready-to-eat snacks, chilled refreshments, and custom celebration pieces from Oby's home kitchen.", preset: {} },
    bakery: { title: "The Bakery Collection", summary: "Celebration cakes and fresh pastries for birthdays, gifting, breakfast runs, and thoughtful hosting.", preset: { collection: ["celebration-cakes", "fresh-pastries"] } },
    snacks: { title: "The Snack Bar", summary: "Crunchy jars, traditional favorites, and grab-and-go bites for daily cravings or event tables.", preset: { collection: ["crunchy-snacks"] } },
    refreshments: { title: "Refreshments", summary: "Healthy bowls and chilled drinks made for breakfast, brunch, and all-day refreshment.", preset: { collection: ["healthy-bowls", "chilled-drinks"] } },
    custom: { title: "Filtered Pantry", summary: "Mix and match filters to find exactly the texture, occasion, and portion size you need." }
};

const cakeIdeaFlow = {
    generate(payload) {
        const occasion = payload.occasion.trim() || "special celebration";
        const flavors = payload.flavors.trim() || "vanilla and buttercream";
        const style = payload.style.trim() || "simple and elegant";
        const seed = hashString(`${occasion}|${flavors}|${style}`);
        const cakeTypes = ["single-tier cake", "clean celebration cake", "soft buttercream cake", "party cake", "simple statement cake", "pretty occasion cake"];
        const finishes = ["fresh flowers", "soft piping", "gold touches", "pearls", "a smooth finish", "a neat textured finish"];
        const moodNotes = ["warm and elegant", "clean and classy", "soft and celebratory", "modern but friendly", "simple and beautiful", "bright and memorable"];
        const flavorNotes = ["light and easy to enjoy", "rich without feeling too heavy", "soft, creamy, and crowd-pleasing", "balanced and celebration-ready", "sweet with a smooth finish", "familiar and comforting"];

        return {
            title: `${capitalize(occasion)} Cake Idea`,
            description: `A ${pickFromSeed(cakeTypes, seed + 3)} for ${occasion} with ${flavors} flavors and a ${style} look.`,
            flavorStory: `Flavor plan: ${capitalize(flavors)} with a ${pickFromSeed(flavorNotes, seed + 7)} taste.`,
            designDirection: `Look and feel: ${capitalize(style)} styling with a ${pickFromSeed(moodNotes, seed + 11)} finish.`,
            finishingTouch: `Final touch: Try ${pickFromSeed(finishes, seed + 19)} to make it feel extra special.`
        };
    }
};

let currentCakeIdea = null;
let currentRating = 0;
let activeMenuView = "all";
let isCustomFilterState = false;
let activeFilters = createEmptyFilters();
let menuSearchQuery = "";
function buildWhatsAppUrl(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function launchExternalUrl(url, options = {}) {
    closeMobileMenu();
    const { sameTab = false } = options;

    if (!url) return false;

    const link = document.createElement("a");
    link.href = url;
    link.style.display = "none";

    if (sameTab) {
        link.target = "_self";
    } else {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    }

    document.body.appendChild(link);
    link.click();
    link.remove();

    return true;
}

function openWhatsAppMessage(message) {
    closeMobileMenu();
    launchExternalUrl(buildWhatsAppUrl(message), { sameTab: true });
}

function buildMailtoUrl(subject, body) {
    return `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function openEmailComposer(subject, body) {
    const launched = launchExternalUrl(buildMailtoUrl(subject, body), { sameTab: true });
    if (launched) {
        showToast("Opening your default email app.", "muted");
    }
}

function hashString(value) {
    return [...value].reduce((total, char, index) => total + (char.charCodeAt(0) * (index + 1)), 0);
}

function pickFromSeed(options, seed) {
    return options[Math.abs(seed) % options.length];
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function slugify(value) {
    return String(value || "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function getTodayKey() {
    return new Date().toISOString().slice(0, 10);
}

function ensureMenuShuffleSeed() {
    const todayKey = getTodayKey();
    if (!menuShuffleSeed || menuShuffleDayKey !== todayKey) {
        menuShuffleDayKey = todayKey;
        menuShuffleSeed = `${todayKey}-${Math.random().toString(36).slice(2, 10)}`;
    }
    return menuShuffleSeed;
}

function createSeededRandom(seedText) {
    let seed = 0;
    for (let index = 0; index < seedText.length; index += 1) {
        seed = ((seed * 31) + seedText.charCodeAt(index)) >>> 0;
    }

    return () => {
        seed = (seed * 1664525 + 1013904223) >>> 0;
        return seed / 4294967296;
    };
}

function shuffleProductsForDisplay(items) {
    const shuffled = [...items];
    const random = createSeededRandom(`${ensureMenuShuffleSeed()}-${items.length}`);
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(random() * (index + 1));
        [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
}

function getProductImageMarkup(product, className, options = {}) {
    const attrs = options.priority === "high"
        ? 'loading="eager" fetchpriority="high"'
        : 'loading="lazy" fetchpriority="low"';
    const imageUrl = escapeHtml(product?.img || DEFAULT_MENU_IMAGE);
    const altText = escapeHtml(product?.name || "Fransmore product");
    const fallback = escapeHtml(DEFAULT_MENU_IMAGE);
    return `<img src="${imageUrl}" alt="${altText}" class="${className}" decoding="async" ${attrs} onerror="this.onerror=null;this.src='${fallback}'">`;
}

function getSupabaseConfig() {
    return window.FRANSMORE_SUPABASE_CONFIG || {};
}

function getSupabaseBucket() {
    return getSupabaseConfig().storageBucket || "menu-products";
}

function isSupabaseReady() {
    const config = getSupabaseConfig();
    return Boolean(window.supabase?.createClient && config.url && config.anonKey);
}

function getSupabaseClient() {
    if (supabaseClient) return supabaseClient;
    if (!isSupabaseReady()) return null;
    const config = getSupabaseConfig();
    supabaseClient = window.supabase.createClient(config.url, config.anonKey, {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
        }
    });
    return supabaseClient;
}

function setMenuDataStatus(message, tone = "muted") {
    const node = document.getElementById("menu-data-status");
    if (!node) return;
    const toneClass = tone === "error"
        ? "text-rose-500"
        : tone === "success"
            ? "text-emerald-600"
            : "text-gray-400";
    node.className = `text-xs uppercase tracking-[0.25em] font-bold ${toneClass}`;
    node.textContent = message;
}

function setMenuLoading(isLoading) {
    const loader = document.getElementById("menu-loading");
    const grid = document.getElementById("product-grid");
    if (loader) loader.classList.toggle("hidden", !isLoading);
    if (grid) grid.classList.toggle("hidden", isLoading);
}

function ensureToastContainer() {
    let container = document.getElementById("fransmore-toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "fransmore-toast-container";
        container.className = "fixed top-24 right-4 z-[120] flex w-[min(92vw,24rem)] flex-col gap-3 pointer-events-none";
        document.body.appendChild(container);
    }
    return container;
}

function showToast(message, tone = "success") {
    if (!document.body) return;
    const container = ensureToastContainer();
    const toast = document.createElement("div");
    const toneClasses = tone === "error"
        ? "border-rose-200 bg-white text-rose-600"
        : tone === "muted"
            ? "border-gold/10 bg-white text-gray-600"
            : "border-emerald-200 bg-white text-emerald-700";

    toast.className = `pointer-events-auto rounded-[24px] border px-5 py-4 shadow-2xl panel-luxe animate-fade-in ${toneClasses}`;
    toast.innerHTML = `
        <div class="flex items-start gap-3">
            <div class="mt-0.5 h-2.5 w-2.5 rounded-full ${tone === "error" ? "bg-rose-500" : tone === "muted" ? "bg-gold" : "bg-emerald-500"}"></div>
            <div class="min-w-0">
                <p class="text-[10px] uppercase tracking-[0.3em] ${tone === "error" ? "text-rose-400" : tone === "muted" ? "text-gold" : "text-emerald-500"} mb-1">Fransmore Update</p>
                <p class="text-sm font-medium leading-relaxed">${escapeHtml(message)}</p>
            </div>
        </div>
    `;

    container.appendChild(toast);
    window.setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-6px)";
        toast.style.transition = "opacity 0.25s ease, transform 0.25s ease";
        window.setTimeout(() => toast.remove(), 260);
    }, 3400);
}

function normalizeProductRecord(record) {
    return {
        id: record.id,
        name: record.name,
        type: record.type,
        collection: record.collection,
        occasion: Array.isArray(record.occasion) ? record.occasion : [],
        orderStyle: record.orderStyle || record.order_style,
        method: record.method || "",
        preferences: Array.isArray(record.preferences) ? record.preferences : [],
        volume: Array.isArray(record.volume) ? record.volume : [],
        bestsellers: Array.isArray(record.bestsellers) ? record.bestsellers : [],
        short: record.short || record.short_description || "",
        img: record.img || record.image_url || DEFAULT_MENU_IMAGE,
        isActive: record.isActive ?? record.is_active ?? true
    };
}

function createProductPayload(formValues) {
    return {
        name: formValues.name,
        slug: slugify(formValues.name),
        short_description: formValues.short,
        image_url: formValues.img,
        type: formValues.type,
        collection: formValues.collection,
        occasion: formValues.occasion,
        order_style: formValues.orderStyle,
        method: formValues.method || null,
        preferences: formValues.preferences,
        volume: formValues.volume,
        bestsellers: formValues.bestsellers,
        is_active: formValues.isActive
    };
}

async function loadProductsFromSupabase() {
    const client = getSupabaseClient();
    if (!client) return null;
    const { data, error } = await client
        .from(SUPABASE_MENU_TABLE)
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false });
    if (error) throw error;
    return (data || []).map(normalizeProductRecord);
}

async function syncMenuProductsFromBackend() {
    if (menuSyncPromise) return menuSyncPromise;

    const statusMessage = "Connect Supabase to start showing live menu products.";
    if (!document.getElementById("menu-filters")) return;
    menuSyncPromise = (async () => {
        setMenuLoading(true);
        if (!isSupabaseReady()) {
            products = [];
            menuDataLoadedFromSupabase = false;
            setMenuDataStatus(statusMessage, "muted");
            setMenuLoading(false);
            return;
        }

        try {
            const remoteProducts = await loadProductsFromSupabase();
            products = shuffleProductsForDisplay(remoteProducts || []);
            menuDataLoadedFromSupabase = true;
            setMenuDataStatus(
                products.length > 0
                    ? "Live menu connected to Supabase."
                    : "Supabase connected. Publish products from the admin page to fill this menu.",
                products.length > 0 ? "success" : "muted"
            );
        } catch (error) {
            console.error("Unable to load Supabase menu products:", error);
            products = [];
            menuDataLoadedFromSupabase = false;
            setMenuDataStatus("Could not load live menu products from Supabase.", "error");
        } finally {
            setMenuLoading(false);
        }
    })();

    try {
        await menuSyncPromise;
    } finally {
        menuSyncPromise = null;
    }
}

async function refreshMenuFromRealtime() {
    await syncMenuProductsFromBackend();
    filterAndRenderProducts();
}

async function handleMenuSyncSignal(reason = "sync") {
    if (document.getElementById("menu-filters")) {
        await refreshMenuFromRealtime();
        setMenuDataStatus(`Live menu refreshed instantly after ${reason}.`, "success");
        showToast(`Menu updated after ${reason}.`, "success");
    }
    if (document.getElementById("admin-platform")) {
        await refreshAdminProducts();
        setAdminStatus(`Admin catalog refreshed after ${reason}.`, "success");
    }
}

function notifyMenuSync(reason = "publish") {
    const payload = { reason, timestamp: Date.now() };
    if (typeof BroadcastChannel !== "undefined") {
        if (!menuSyncChannel) menuSyncChannel = new BroadcastChannel("fransmore-menu-sync");
        menuSyncChannel.postMessage(payload);
    }
    try {
        localStorage.setItem(MENU_SYNC_EVENT_KEY, JSON.stringify(payload));
    } catch (error) {
        console.warn("Unable to write menu sync event to localStorage:", error);
    }
}

function subscribeToLocalMenuSync() {
    if (menuSyncSubscribed) return;
    menuSyncSubscribed = true;

    if (typeof BroadcastChannel !== "undefined") {
        if (!menuSyncChannel) menuSyncChannel = new BroadcastChannel("fransmore-menu-sync");
        menuSyncChannel.addEventListener("message", async (event) => {
            await handleMenuSyncSignal(event.data?.reason || "publish");
        });
    }

    window.addEventListener("storage", async (event) => {
        if (event.key !== MENU_SYNC_EVENT_KEY || !event.newValue) return;
        try {
            const payload = JSON.parse(event.newValue);
            await handleMenuSyncSignal(payload.reason || "publish");
        } catch (error) {
            console.warn("Unable to parse menu sync event:", error);
        }
    });
}

function subscribeToMenuRealtime() {
    if (menuRealtimeChannel || !document.getElementById("menu-filters")) return;
    const client = getSupabaseClient();
    if (!client) return;

    menuRealtimeChannel = client
        .channel("fransmore-menu-realtime")
        .on("postgres_changes", { event: "*", schema: "public", table: SUPABASE_MENU_TABLE }, async () => {
            await refreshMenuFromRealtime();
            setMenuDataStatus("Live menu updated in realtime from Supabase.", "success");
            showToast("Menu refreshed with the latest published products.", "success");
        })
        .subscribe((status) => {
            if (status === "SUBSCRIBED" && menuDataLoadedFromSupabase) {
                setMenuDataStatus("Live menu connected with realtime updates.", "success");
            }
        });
}

function subscribeToAdminRealtime() {
    if (adminRealtimeChannel || !document.getElementById("admin-platform")) return;
    const client = getSupabaseClient();
    if (!client) return;

    adminRealtimeChannel = client
        .channel("fransmore-admin-realtime")
        .on("postgres_changes", { event: "*", schema: "public", table: SUPABASE_MENU_TABLE }, async () => {
            await refreshAdminProducts();
            setAdminStatus("Admin catalog updated in realtime.", "success");
            showToast("Admin catalog synced in realtime.", "success");
        })
        .subscribe((status) => {
            if (status === "SUBSCRIBED") {
                setAdminStatus("Realtime sync is active.", "success");
            }
        });
}

function toggleMobileMenu() {
    const menu = document.getElementById("mobile-nav");
    if (menu) menu.classList.toggle("hidden");
}

function closeMobileMenu() {
    const menu = document.getElementById("mobile-nav");
    if (menu) menu.classList.add("hidden");
}

function startGenericOrder() { openWhatsAppMessage(GENERIC_ORDER_MESSAGE); }
function startCateringInquiry() { openWhatsAppMessage(CATERING_INQUIRY_MESSAGE); }
function startServiceInquiry() { openWhatsAppMessage(SERVICE_INQUIRY_MESSAGE); }

function setFooterYear() {
    document.querySelectorAll("[data-footer-year]").forEach(node => {
        node.textContent = new Date().getFullYear();
    });
}

function initActiveNav() {
    const page = document.body.dataset.page;
    document.querySelectorAll("[data-nav]").forEach(link => {
        if (link.dataset.nav === page) link.classList.add("active");
    });
}

function setCheckoutDateMin() {
    const dateInput = document.getElementById("check-date");
    if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];
}

function getProductOrderMessage(product) {
    if (!product) return "";
    const intro = product.orderStyle === "custom-order"
        ? "Hi Fransmore! 👋 I'd like to inquire/order for this custom cake."
        : "Hi Fransmore! 👋 I'd like to order now.";
    return [
        intro,
        `Product: ${product.name}`,
        filterLabelMap.collection[product.collection] ? `Collection: ${filterLabelMap.collection[product.collection]}` : "",
        filterLabelMap.type[product.type] ? `Type: ${filterLabelMap.type[product.type]}` : "",
        product.short ? `Details: ${product.short}` : ""
    ].filter(Boolean);
}

function getProductOrderUrl(product) {
    return buildWhatsAppUrl(getProductOrderMessage(product).join("\n"));
}

function findProductByIdOrName(productRef) {
    return products.find(item => String(item.id) === String(productRef) || item.name === productRef);
}

function orderProductViaWhatsApp(productId) {
    const product = findProductByIdOrName(productId);
    if (!product) return;
    openWhatsAppMessage(getProductOrderMessage(product).join("\n"));
}

function openProductCard(productId) {
    const product = findProductByIdOrName(productId);
    const modal = document.getElementById("product-card-modal");
    const content = document.getElementById("product-card-modal-content");
    const title = document.getElementById("product-card-modal-title");
    const eyebrow = document.getElementById("product-card-modal-eyebrow");
    if (!product || !modal || !content) return;

    if (productCardCloseTimer) {
        window.clearTimeout(productCardCloseTimer);
        productCardCloseTimer = null;
    }

    const topBadges = [filterLabelMap.collection[product.collection], filterLabelMap.type[product.type]].filter(Boolean);
    const detailBadges = [
        filterLabelMap.orderStyle[product.orderStyle],
        ...getProductValues(product, "method").map(value => filterLabelMap.method[value]),
        ...getProductValues(product, "preferences").map(value => filterLabelMap.preferences[value]),
        ...getProductValues(product, "volume").map(value => filterLabelMap.volume[value]),
        ...getProductValues(product, "bestsellers").map(value => filterLabelMap.bestsellers[value])
    ].filter(Boolean);
    const occasionLine = getProductValues(product, "occasion").map(value => filterLabelMap.occasion[value]).join(" | ");
    const detailRows = [
        { label: "Collection", value: filterLabelMap.collection[product.collection] || "" },
        { label: "Type", value: filterLabelMap.type[product.type] || "" },
        { label: "Order Style", value: filterLabelMap.orderStyle[product.orderStyle] || "" },
        { label: "Method", value: getProductValues(product, "method").map(value => filterLabelMap.method[value]).filter(Boolean).join(", ") },
        { label: "Preferences", value: getProductValues(product, "preferences").map(value => filterLabelMap.preferences[value]).filter(Boolean).join(", ") },
        { label: "Volume", value: getProductValues(product, "volume").map(value => filterLabelMap.volume[value]).filter(Boolean).join(", ") },
        { label: "Bestsellers", value: getProductValues(product, "bestsellers").map(value => filterLabelMap.bestsellers[value]).filter(Boolean).join(", ") },
        { label: "Occasion", value: occasionLine }
    ].filter(row => row.value);

    if (eyebrow) eyebrow.textContent = filterLabelMap.collection[product.collection] || "Fransmore Menu";
    if (title) title.textContent = product.name;

    content.innerHTML = `
        <div class="grid xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-6 xl:gap-8 items-start">
            <div class="product-preview-image-panel rounded-[30px] border border-gold/10 p-4 md:p-5">
                <div class="rounded-[24px] bg-white p-3 shadow-sm">
                    ${getProductImageMarkup(product, "w-full h-auto max-h-[36rem] object-contain rounded-[18px]", { priority: "high" })}
                </div>
            </div>
            <div class="space-y-5 xl:space-y-6">
                <div class="flex flex-wrap gap-2">${topBadges.map(badge => `<span class="px-3 py-1 rounded-full bg-cream text-[10px] font-bold uppercase tracking-widest text-navy border border-gold/10">${badge}</span>`).join("")}</div>
                <div>
                    <p class="text-gold text-[10px] uppercase tracking-[0.3em] mb-2">Full Product Card</p>
                    <h3 class="text-3xl md:text-4xl xl:text-5xl font-serif text-navy mb-3">${escapeHtml(product.name)}</h3>
                    <p class="text-base leading-relaxed text-gray-600 font-light">${escapeHtml(product.short)}</p>
                </div>
                <div class="grid sm:grid-cols-2 gap-4">
                    <div class="product-preview-info-card rounded-[24px] px-4 py-4">
                        <p class="text-[10px] uppercase tracking-[0.24em] text-gray-400 mb-2">Best For</p>
                        <p class="text-[10px] uppercase tracking-[0.24em] text-gray-500">${escapeHtml(occasionLine || "Fransmore selection")}</p>
                    </div>
                    <div class="product-preview-info-card rounded-[24px] px-4 py-4">
                        <p class="text-[10px] uppercase tracking-[0.24em] text-gray-400 mb-2">Fransmore Note</p>
                        <p class="text-sm leading-relaxed text-gray-600 font-light">Carefully prepared from the Fransmore kitchen with a polished finish and ready-to-share flavor notes.</p>
                    </div>
                </div>
                <div>
                    <p class="text-[10px] uppercase tracking-[0.24em] text-gray-400 mb-3">At A Glance</p>
                    <div class="flex flex-wrap gap-2">${detailBadges.map(badge => `<span class="px-3 py-1 rounded-full border border-gold/10 bg-white text-[10px] font-bold uppercase tracking-widest text-charcoal">${badge}</span>`).join("")}</div>
                </div>
                <div class="product-preview-info-card rounded-[24px] px-4 py-4">
                    <p class="text-[10px] uppercase tracking-[0.24em] text-gray-400 mb-3">Everything About This Product</p>
                    <div class="grid sm:grid-cols-2 gap-3">
                        ${detailRows.map(row => `
                            <div class="rounded-[18px] border border-gold/10 bg-white px-4 py-3">
                                <p class="text-[10px] uppercase tracking-[0.24em] text-gray-400 mb-2">${row.label}</p>
                                <p class="text-sm leading-relaxed text-gray-600 font-light">${escapeHtml(row.value)}</p>
                            </div>
                        `).join("")}
                    </div>
                </div>
                <div class="flex flex-col sm:flex-row gap-3 pt-2">
                    <a href="${escapeHtml(getProductOrderUrl(product))}" target="_blank" rel="noopener noreferrer" onclick="closeProductCard(); closeMobileMenu();" class="menu-order-button inline-flex items-center justify-center">
                        <span>Order Now</span>
                    </a>
                    <button type="button" onclick="closeProductCard()" class="px-5 py-3 rounded-2xl border border-gold/15 bg-white text-xs font-bold uppercase tracking-widest text-navy hover:border-gold hover:text-gold transition">Back To Menu</button>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove("hidden");
    content.scrollTop = 0;
    document.body.style.overflow = "hidden";
    const animateIn = window.requestAnimationFrame || ((callback) => window.setTimeout(callback, 0));
    animateIn(() => modal.classList.add("is-open"));
}

function closeProductCard() {
    const modal = document.getElementById("product-card-modal");
    if (!modal || modal.classList.contains("hidden")) return;
    modal.classList.remove("is-open");
    productCardCloseTimer = window.setTimeout(() => {
        modal.classList.add("hidden");
        productCardCloseTimer = null;
    }, 280);
    document.body.style.overflow = "";
}

function handleGlobalKeydown(event) {
    if (event.key === "Escape") closeProductCard();
}

window.openProductCard = openProductCard;
window.closeProductCard = closeProductCard;

function renderCakeIdea(concept) {
    const mapping = {
        "cake-idea-title": concept.title,
        "cake-idea-description": concept.description,
        "cake-idea-flavor": concept.flavorStory,
        "cake-idea-design": concept.designDirection,
        "cake-idea-finish": concept.finishingTouch
    };
    Object.entries(mapping).forEach(([id, value]) => {
        const node = document.getElementById(id);
        if (node) node.textContent = value;
    });
}

function generateCakeIdeaConcept() {
    const occasion = document.getElementById("idea-occasion")?.value || "";
    const flavors = document.getElementById("idea-flavors")?.value || "";
    const style = document.getElementById("idea-style")?.value || "";
    if (!occasion.trim() || !flavors.trim()) {
        alert("Please add an occasion and flavor preferences first.");
        return;
    }
    currentCakeIdea = cakeIdeaFlow.generate({ occasion, flavors, style });
    renderCakeIdea(currentCakeIdea);
}

function shareCakeIdeaOnWhatsApp() {
    if (!currentCakeIdea) {
        generateCakeIdeaConcept();
        if (!currentCakeIdea) return;
    }
    openWhatsAppMessage(
        `Hi Fransmore! 👋 I'd love to discuss this cake idea:\n\n` +
        `Cake idea: ${currentCakeIdea.title}\n` +
        `Summary: ${currentCakeIdea.description}\n` +
        `${currentCakeIdea.flavorStory}\n` +
        `${currentCakeIdea.designDirection}\n` +
        `${currentCakeIdea.finishingTouch}`
    );
}

function useCakeIdeaInBrief() {
    const occasion = document.getElementById("idea-occasion")?.value || "";
    const flavors = document.getElementById("idea-flavors")?.value || "";
    const style = document.getElementById("idea-style")?.value || "";

    const briefOccasion = document.getElementById("brief-occasion");
    const briefFlavors = document.getElementById("brief-flavors");
    const briefStyle = document.getElementById("brief-style");
    const briefMessage = document.getElementById("brief-message");

    if (briefOccasion && occasion.trim()) briefOccasion.value = occasion;
    if (briefFlavors && flavors.trim()) briefFlavors.value = flavors;
    if (briefStyle && style.trim()) briefStyle.value = style;

    if (briefMessage && currentCakeIdea && !briefMessage.value.trim()) {
        briefMessage.value = `${currentCakeIdea.title}\n${currentCakeIdea.description}\n${currentCakeIdea.finishingTouch}`;
    }

    const briefSection = document.getElementById("cake-brief");
    if (briefSection) briefSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function generateAIOrder() {
    const occasion = document.getElementById("brief-occasion")?.value || "";
    const size = document.getElementById("brief-size")?.value || "";
    const flavors = document.getElementById("brief-flavors")?.value || "";
    const style = document.getElementById("brief-style")?.value || "";
    const colors = document.getElementById("brief-colors")?.value || "";
    const extraNote = document.getElementById("brief-message")?.value || "";

    if (![occasion, size, flavors, style, colors, extraNote].some(value => value.trim())) {
        alert("Please add a few cake details first.");
        return;
    }

    const lines = [
        "Hi Fransmore! 👋 I'd like to order a custom cake.",
        occasion.trim() ? `Occasion: ${occasion}` : "",
        size.trim() ? `Size/Servings: ${size}` : "",
        flavors.trim() ? `Flavors: ${flavors}` : "",
        style.trim() ? `Style: ${style}` : "",
        colors.trim() ? `Colors/Details: ${colors}` : "",
        extraNote.trim() ? `Extra Notes: ${extraNote}` : ""
    ].filter(Boolean);

    openWhatsAppMessage(lines.join("\n"));
}

function sendContactEmail(event) {
    event?.preventDefault();
    const name = document.getElementById("c-name")?.value.trim() || "";
    const email = document.getElementById("c-email")?.value.trim() || "";
    const msg = document.getElementById("c-msg")?.value.trim() || "";
    if (!name.trim() || !email.trim() || !msg.trim()) {
        alert("Fill all fields!");
        return;
    }
    openEmailComposer(
        `Fransmore inquiry from ${name}`,
        `Hello Fransmore,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${msg}\n\nSent from the Fransmore website contact form.`
    );
}

function subscribeCircle() {
    const form = document.getElementById("newsletter-form");
    const success = document.getElementById("news-success");
    if (form && success) {
        form.classList.add("hidden");
        success.classList.remove("hidden");
    }
}

function setRating(value) {
    currentRating = value;
    document.querySelectorAll(".star-btn").forEach((star, index) => {
        star.classList.toggle("star-active", index < value);
    });
}

function submitReview() {
    const name = document.getElementById("rev-name")?.value || "";
    const text = document.getElementById("rev-text")?.value || "";
    if (!name.trim() || !text.trim() || currentRating === 0) {
        alert("Please complete your review!");
        return;
    }
    const review = { name, text, stars: currentRating };
    const reviews = JSON.parse(localStorage.getItem("fransmore_reviews") || "[]");
    reviews.unshift(review);
    localStorage.setItem("fransmore_reviews", JSON.stringify(reviews));
    document.getElementById("rev-name").value = "";
    document.getElementById("rev-text").value = "";
    setRating(0);
    loadReviews();
}

function loadReviews() {
    const feed = document.getElementById("review-feed");
    if (!feed) return;
    let reviews = JSON.parse(localStorage.getItem("fransmore_reviews") || "[]");
    if (reviews.length === 0) reviews = [{ name: "Abiola O.", text: "Best chinchin I have had in a long time.", stars: 5 }];
    feed.innerHTML = reviews.map(review => `
        <div class="bg-cream p-6 rounded-3xl animate-fade-in shadow-sm border border-gold/5">
            <div class="flex gap-1 mb-2 text-gold">${Array(review.stars).fill('<i data-lucide="star" class="w-3 h-3 fill-current"></i>').join("")}</div>
            <p class="font-bold text-navy text-sm">${review.name}</p>
            <p class="text-gray-500 text-xs italic font-light">"${review.text}"</p>
        </div>
    `).join("");
    if (window.lucide) lucide.createIcons();
}

function createEmptyFilters() {
    return filterGroups.reduce((state, group) => {
        state[group.key] = new Set();
        return state;
    }, {});
}

function getProductValues(product, key) {
    const value = product[key];
    if (Array.isArray(value)) return value;
    if (value) return [value];
    return [];
}

function getProductSearchText(product) {
    return [
        product.name,
        product.short,
        filterLabelMap.collection[product.collection] || "",
        filterLabelMap.type[product.type] || "",
        filterLabelMap.orderStyle[product.orderStyle] || "",
        ...getProductValues(product, "occasion").map(value => filterLabelMap.occasion[value] || ""),
        ...getProductValues(product, "method").map(value => filterLabelMap.method[value] || ""),
        ...getProductValues(product, "preferences").map(value => filterLabelMap.preferences[value] || ""),
        ...getProductValues(product, "volume").map(value => filterLabelMap.volume[value] || ""),
        ...getProductValues(product, "bestsellers").map(value => filterLabelMap.bestsellers[value] || "")
    ].join(" ").toLowerCase();
}

function getSelectedTypeValues() {
    return [...(activeFilters.type || [])];
}

function getVisibleFilterGroupKeys() {
    const selectedTypes = getSelectedTypeValues();
    if (selectedTypes.length === 0) {
        return new Set(filterGroups.map(group => group.key));
    }

    const visibleGroups = new Set(["type"]);
    selectedTypes.forEach(type => {
        (typeSpecificVisibleFilterGroups[type] || new Set(["type"])).forEach(groupKey => visibleGroups.add(groupKey));
    });
    return visibleGroups;
}

function getContextualProducts() {
    const selectedTypes = getSelectedTypeValues();
    if (selectedTypes.length === 0) return products;
    return products.filter(product => selectedTypes.includes(product.type));
}

function getContextualOptionValues(groupKey) {
    if (groupKey === "type") {
        return new Set(filterGroups.find(group => group.key === "type")?.options.map(option => option.value) || []);
    }

    const values = new Set();
    getContextualProducts().forEach(product => {
        getProductValues(product, groupKey).forEach(value => values.add(value));
    });
    return values;
}

function pruneUnavailableContextualFilters() {
    const selectedTypes = getSelectedTypeValues();
    const visibleGroups = getVisibleFilterGroupKeys();

    filterGroups.forEach(group => {
        if (!visibleGroups.has(group.key)) {
            activeFilters[group.key] = new Set();
        }
    });

    if (selectedTypes.length === 0) return;

    filterGroups.forEach(group => {
        if (group.key === "type") return;
        if (!visibleGroups.has(group.key)) return;
        const allowedValues = getContextualOptionValues(group.key);
        activeFilters[group.key] = new Set(
            [...(activeFilters[group.key] || [])].filter(value => allowedValues.has(value))
        );
    });
}

function renderMenuFilters() {
    const container = document.getElementById("menu-filters");
    if (!container) return;
    const hasTypeContext = getSelectedTypeValues().length > 0;
    const visibleGroups = getVisibleFilterGroupKeys();
    container.innerHTML = filterGroups
        .filter(group => visibleGroups.has(group.key))
        .map(group => `
        <section>
            <div class="mb-4">
                <h4 class="text-navy font-bold uppercase tracking-[0.25em] text-[10px]">${group.label}</h4>
                <p class="text-xs text-gray-400 font-light mt-2">${group.description}</p>
            </div>
            <div class="space-y-3">
                ${(() => {
                    const availableOptions = group.options.filter(option => {
                        if (!hasTypeContext || group.key === "type") return true;
                        return getContextualOptionValues(group.key).has(option.value);
                    });

                    if (availableOptions.length === 0) {
                        return `<div class="rounded-2xl border border-dashed border-gold/10 px-4 py-4 text-xs text-gray-400 font-light">No additional ${group.label.toLowerCase()} options for this type.</div>`;
                    }

                    return availableOptions.map(option => `
                    <label class="flex items-center justify-between gap-4 rounded-2xl border border-gold/10 px-4 py-3 hover:border-gold/40 transition cursor-pointer">
                        <span class="text-sm text-charcoal">${option.label}</span>
                        <input type="checkbox" value="${option.value}" data-group="${group.key}" class="menu-filter-input h-4 w-4 rounded border-gold/30 text-gold focus:ring-gold" ${activeFilters[group.key]?.has(option.value) ? "checked" : ""}>
                    </label>
                `).join("");
                })()}
            </div>
        </section>
    `).join("");
    container.querySelectorAll(".menu-filter-input").forEach(input => input.addEventListener("change", handleMenuFilterChange));
}

function syncFilterInputs() {
    document.querySelectorAll(".menu-filter-input").forEach(input => {
        const group = input.dataset.group;
        input.checked = activeFilters[group]?.has(input.value) || false;
    });
}

function updateMenuHeading() {
    const view = isCustomFilterState ? menuViews.custom : (menuViews[activeMenuView] || menuViews.all);
    const title = document.getElementById("menu-title");
    const summary = document.getElementById("menu-summary");
    if (title) title.textContent = view.title;
    if (summary) summary.textContent = view.summary;
}

function updateResetButtonLabel() {
    const button = document.getElementById("reset-menu-filters");
    if (button) button.textContent = activeMenuView === "all" ? "Clear Filters" : "Reset Collection";
}

function applyMenuView(viewId) {
    activeMenuView = menuViews[viewId] ? viewId : "all";
    isCustomFilterState = false;
    activeFilters = createEmptyFilters();
    const preset = menuViews[activeMenuView].preset || {};
    Object.entries(preset).forEach(([key, values]) => {
        activeFilters[key] = new Set(values);
    });
    pruneUnavailableContextualFilters();
    renderMenuFilters();
    updateMenuHeading();
    updateResetButtonLabel();
    filterAndRenderProducts();
}

function handleMenuFilterChange(event) {
    const input = event.target;
    const group = input.dataset.group;
    if (!activeFilters[group]) activeFilters[group] = new Set();
    if (input.checked) activeFilters[group].add(input.value);
    else activeFilters[group].delete(input.value);
    isCustomFilterState = true;
    pruneUnavailableContextualFilters();
    renderMenuFilters();
    updateMenuHeading();
    updateResetButtonLabel();
    filterAndRenderProducts();
}

function removeMenuFilter(group, value) {
    if (!activeFilters[group]) return;
    activeFilters[group].delete(value);
    isCustomFilterState = true;
    pruneUnavailableContextualFilters();
    renderMenuFilters();
    updateMenuHeading();
    updateResetButtonLabel();
    filterAndRenderProducts();
}

function productMatchesFilters(product) {
    return filterGroups.every(group => {
        const selected = activeFilters[group.key];
        if (!selected || selected.size === 0) return true;
        const values = getProductValues(product, group.key);
        return [...selected].every(value => values.includes(value));
    });
}

function productMatchesSearch(product) {
    if (!menuSearchQuery.trim()) return true;
    return getProductSearchText(product).includes(menuSearchQuery.trim().toLowerCase());
}

function renderActiveFilterChips() {
    const container = document.getElementById("active-filter-chips");
    if (!container) return;
    const chips = filterGroups.flatMap(group => [...activeFilters[group.key]].map(value => ({ group: group.key, value, label: filterLabelMap[group.key][value] })));
    if (chips.length === 0) {
        container.innerHTML = "";
        return;
    }
    container.innerHTML = chips.map(chip => `
        <button onclick="removeMenuFilter('${chip.group}', '${chip.value}')" class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gold/10 text-xs font-bold uppercase tracking-widest text-navy hover:border-gold hover:text-gold transition">
            <span>${chip.label}</span>
            <span aria-hidden="true">x</span>
        </button>
    `).join("");
}

function renderResultsMeta(count) {
    const meta = document.getElementById("product-results-meta");
    if (meta) meta.textContent = "";
}

function renderProducts(list) {
    const grid = document.getElementById("product-grid");
    const emptyState = document.getElementById("empty-state");
    const emptyTitle = document.getElementById("empty-state-title");
    const emptyText = document.getElementById("empty-state-text");
    if (!grid || !emptyState) return;
    emptyState.classList.toggle("hidden", list.length !== 0);
    if (emptyTitle) {
        emptyTitle.textContent = menuSearchQuery.trim()
            ? "No products match that search right now."
            : "No products match these filters right now.";
    }
    if (emptyText) {
        emptyText.textContent = menuSearchQuery.trim()
            ? "Try a different product name or clear your search to browse the full menu."
            : "Try clearing some filters or return to the full menu.";
    }
    grid.innerHTML = list.map(product => {
        const topBadges = [filterLabelMap.collection[product.collection], filterLabelMap.type[product.type]].filter(Boolean);
        const detailBadges = [
            filterLabelMap.orderStyle[product.orderStyle],
            ...getProductValues(product, "method").map(value => filterLabelMap.method[value]),
            ...getProductValues(product, "preferences").map(value => filterLabelMap.preferences[value]),
            ...getProductValues(product, "volume").slice(0, 1).map(value => filterLabelMap.volume[value]),
            ...getProductValues(product, "bestsellers").map(value => filterLabelMap.bestsellers[value])
        ].filter(Boolean);
        const occasionLine = getProductValues(product, "occasion").map(value => filterLabelMap.occasion[value]).join(" | ");
        return `
            <article class="rounded-[24px] overflow-hidden border border-gold/10 bg-cream/40 group">
                <div class="h-56 overflow-hidden bg-white">
                    ${getProductImageMarkup(product, "w-full h-full object-cover group-hover:scale-[1.03] transition duration-500")}
                </div>
                <div class="p-5 flex flex-col gap-4">
                    <div class="flex flex-wrap gap-2">${topBadges.map(badge => `<span class="px-3 py-1 rounded-full bg-white text-[10px] font-bold uppercase tracking-widest text-navy border border-gold/10">${badge}</span>`).join("")}</div>
                    <div>
                        <h3 class="text-xl font-serif text-navy mb-2">${product.name}</h3>
                        <p class="text-[10px] uppercase tracking-[0.24em] text-gray-400">${occasionLine || "Fransmore selection"}</p>
                    </div>
                    <div class="mt-auto flex flex-col gap-3">
                        <div class="flex flex-col gap-3">
                            <a href="${escapeHtml(getProductOrderUrl(product))}" target="_blank" rel="noopener noreferrer" onclick="closeMobileMenu()" class="menu-order-button inline-flex items-center justify-center" aria-label="Order ${escapeHtml(product.name)} on WhatsApp">
                                <span>Order Now</span>
                            </a>
                            <button type="button" data-product-preview="${escapeHtml(product.id)}" class="menu-preview-button rounded-2xl border border-gold/15 bg-white px-5 py-3 text-center text-xs font-bold uppercase tracking-widest text-navy hover:border-gold hover:text-gold transition">
                                See Full Card
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join("");
    grid.querySelectorAll("[data-product-preview]").forEach(button => {
        button.addEventListener("click", () => openProductCard(button.dataset.productPreview));
    });
    if (window.lucide) lucide.createIcons();
}

function filterAndRenderProducts() {
    const filtered = products.filter(product => productMatchesFilters(product) && productMatchesSearch(product));
    renderActiveFilterChips();
    renderResultsMeta(filtered.length);
    renderProducts(filtered);
}

function handleMenuSearchInput(event) {
    const nextQuery = event.target.value || "";
    if (menuSearchDebounceTimer) window.clearTimeout(menuSearchDebounceTimer);
    menuSearchDebounceTimer = window.setTimeout(() => {
        menuSearchQuery = nextQuery;
        filterAndRenderProducts();
    }, 120);
}

function clearMenuSearch() {
    if (menuSearchDebounceTimer) {
        window.clearTimeout(menuSearchDebounceTimer);
        menuSearchDebounceTimer = null;
    }
    menuSearchQuery = "";
    const input = document.getElementById("menu-search-input");
    if (input) input.value = "";
    filterAndRenderProducts();
}

function initMenuSearch() {
    const input = document.getElementById("menu-search-input");
    const clearButton = document.getElementById("clear-menu-search");
    if (input) input.addEventListener("input", handleMenuSearchInput);
    if (clearButton) clearButton.addEventListener("click", clearMenuSearch);
}

function toggleMenuFilters() {
    const panel = document.getElementById("menu-filters-panel");
    const label = document.getElementById("menu-filter-toggle-label");
    const layout = document.getElementById("menu-layout");
    if (!panel) return;
    panel.classList.toggle("collapsible-filter-hidden");
    if (layout) layout.classList.toggle("menu-layout-full", panel.classList.contains("collapsible-filter-hidden"));
    if (label) label.textContent = panel.classList.contains("collapsible-filter-hidden") ? "Show Filters" : "Hide Filters";
}

function setAdminStatus(message, tone = "muted") {
    const node = document.getElementById("admin-status");
    if (!node) return;
    const toneClass = tone === "error"
        ? "text-rose-500"
        : tone === "success"
            ? "text-emerald-600"
            : "text-gray-500";
    node.className = `text-sm font-light ${toneClass}`;
    node.textContent = message;
}

function setAdminSetupMessage(message) {
    const node = document.getElementById("admin-setup-message");
    if (node) node.textContent = message;
}

function renderAdminFilterGroups() {
    const container = document.getElementById("admin-filter-groups");
    if (!container) return;
    const multiGroups = new Set(["occasion", "preferences", "volume", "bestsellers"]);
    container.innerHTML = filterGroups.map(group => multiGroups.has(group.key)
        ? `
            <section class="space-y-3">
                <div>
                    <p class="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">${group.label}</p>
                    <p class="text-sm text-gray-500 font-light">${group.description}</p>
                </div>
                <div class="grid sm:grid-cols-2 gap-3">
                    ${group.options.map(option => `
                        <label class="flex items-center gap-3 rounded-2xl border border-gold/10 bg-cream px-4 py-3 cursor-pointer">
                            <input type="checkbox" data-admin-group="${group.key}" value="${option.value}" class="h-4 w-4 rounded border-gold/30 text-gold focus:ring-gold">
                            <span class="text-sm text-charcoal">${option.label}</span>
                        </label>
                    `).join("")}
                </div>
            </section>
        `
        : `
            <section class="space-y-3">
                <div>
                    <p class="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">${group.label}</p>
                    <p class="text-sm text-gray-500 font-light">${group.description}</p>
                </div>
                <select id="admin-${group.key}" class="w-full rounded-2xl border border-gold/10 bg-cream px-4 py-4 outline-none focus:border-gold">
                    <option value="">Choose ${group.label}</option>
                    ${group.options.map(option => `<option value="${option.value}">${option.label}</option>`).join("")}
                </select>
            </section>
        `
    ).join("");
}

function getAdminSelection(groupKey) {
    return [...document.querySelectorAll(`[data-admin-group="${groupKey}"]:checked`)].map(input => input.value);
}

function setAdminSelection(groupKey, values) {
    document.querySelectorAll(`[data-admin-group="${groupKey}"]`).forEach(input => {
        input.checked = values.includes(input.value);
    });
}

function updateAdminImagePreview(imageUrl) {
    const preview = document.getElementById("admin-image-preview");
    if (!preview) return;
    if (!imageUrl) {
        preview.innerHTML = '<div class="rounded-[28px] border border-dashed border-gold/20 px-6 py-12 text-center text-sm text-gray-400">Product image preview will appear here after upload or image URL entry.</div>';
        return;
    }
    preview.innerHTML = `<img src="${escapeHtml(imageUrl)}" alt="Product preview" class="w-full h-64 object-cover rounded-[28px] border border-gold/10">`;
}

function resetAdminProductForm() {
    const form = document.getElementById("admin-product-form");
    if (form) form.reset();
    adminEditingId = null;
    ["occasion", "preferences", "volume", "bestsellers"].forEach(groupKey => setAdminSelection(groupKey, []));
    const hiddenId = document.getElementById("admin-product-id");
    const title = document.getElementById("admin-form-title");
    const submitLabel = document.getElementById("admin-submit-label");
    const activeToggle = document.getElementById("admin-is-active");
    if (hiddenId) hiddenId.value = "";
    if (title) title.textContent = "Add a Menu Product";
    if (submitLabel) submitLabel.textContent = "Publish Product";
    if (activeToggle) activeToggle.checked = true;
    updateAdminImagePreview("");
}

function populateAdminForm(product) {
    adminEditingId = product.id;
    const fields = {
        "admin-product-id": product.id,
        "admin-name": product.name,
        "admin-short": product.short,
        "admin-image-url": product.img,
        "admin-type": product.type,
        "admin-collection": product.collection,
        "admin-orderStyle": product.orderStyle,
        "admin-method": product.method || ""
    };
    Object.entries(fields).forEach(([id, value]) => {
        const field = document.getElementById(id);
        if (field) field.value = value || "";
    });
    ["occasion", "preferences", "volume", "bestsellers"].forEach(groupKey => {
        setAdminSelection(groupKey, getProductValues(product, groupKey));
    });
    const title = document.getElementById("admin-form-title");
    const submitLabel = document.getElementById("admin-submit-label");
    const activeToggle = document.getElementById("admin-is-active");
    if (title) title.textContent = `Editing ${product.name}`;
    if (submitLabel) submitLabel.textContent = "Update Product";
    if (activeToggle) activeToggle.checked = product.isActive !== false;
    updateAdminImagePreview(product.img);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

async function loadAdminProducts() {
    const client = getSupabaseClient();
    if (!client) return [];
    const { data, error } = await client.from(SUPABASE_MENU_TABLE).select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return (data || []).map(normalizeProductRecord);
}

function renderAdminProducts(list) {
    const container = document.getElementById("admin-product-list");
    const countNode = document.getElementById("admin-product-count");
    if (countNode) countNode.textContent = `${list.length} product${list.length === 1 ? "" : "s"}`;
    if (!container) return;
    if (list.length === 0) {
        container.innerHTML = '<div class="rounded-[28px] border border-dashed border-gold/15 bg-cream px-6 py-12 text-center text-gray-400">No products are live in Supabase yet. Publish your first menu item from the form.</div>';
        return;
    }
    container.innerHTML = list.map(product => {
        const badges = [filterLabelMap.collection[product.collection], filterLabelMap.type[product.type], filterLabelMap.orderStyle[product.orderStyle]].filter(Boolean);
        return `
            <article class="bg-white rounded-[30px] border border-gold/10 overflow-hidden shadow-sm">
                <div class="grid lg:grid-cols-[180px_minmax(0,1fr)]">
                    <img src="${escapeHtml(product.img)}" alt="${escapeHtml(product.name)}" class="w-full h-full min-h-[180px] object-cover">
                    <div class="p-6 space-y-4">
                        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            <div>
                                <div class="flex flex-wrap gap-2 mb-3">${badges.map(badge => `<span class="px-3 py-1 rounded-full bg-cream text-[10px] font-bold uppercase tracking-widest text-navy">${badge}</span>`).join("")}</div>
                                <h3 class="text-2xl font-serif text-navy">${escapeHtml(product.name)}</h3>
                                <p class="text-sm text-gray-500 font-light leading-relaxed mt-2">${escapeHtml(product.short)}</p>
                            </div>
                            <span class="inline-flex items-center px-3 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest ${product.isActive !== false ? "bg-emerald-50 text-emerald-700" : "bg-gray-100 text-gray-500"}">${product.isActive !== false ? "Active" : "Draft"}</span>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-3">
                            <button type="button" data-admin-action="edit" data-product-id="${escapeHtml(product.id)}" class="flex-1 rounded-full bg-navy px-5 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-gold transition">Edit</button>
                            <button type="button" data-admin-action="toggle-status" data-product-id="${escapeHtml(product.id)}" data-next-active="${product.isActive !== false ? "false" : "true"}" class="flex-1 rounded-full border border-gold/15 px-5 py-3 text-xs font-bold uppercase tracking-widest text-navy hover:border-gold hover:text-gold transition">${product.isActive !== false ? "Move to Draft" : "Publish"}</button>
                            <button type="button" data-admin-action="delete" data-product-id="${escapeHtml(product.id)}" class="rounded-full border border-rose-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-rose-500 hover:bg-rose-50 transition">Delete</button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

async function refreshAdminProducts() {
    try {
        const items = await loadAdminProducts();
        products = items.filter(product => product.isActive !== false);
        renderAdminProducts(items);
        setAdminStatus("Menu catalog synced with Supabase.", "success");
    } catch (error) {
        console.error("Unable to load admin products:", error);
        setAdminStatus(error.message || "Could not load menu products from Supabase.", "error");
    }
}

function editAdminProduct(productId) {
    loadAdminProducts()
        .then(items => {
            const product = items.find(item => String(item.id) === String(productId));
            if (!product) {
                setAdminStatus("That product could not be found.", "error");
                return;
            }
            populateAdminForm(product);
            setAdminStatus(`Editing ${product.name}.`, "muted");
        })
        .catch(error => {
            console.error("Unable to prepare edit:", error);
            setAdminStatus(error.message || "Could not open that product for editing.", "error");
        });
}

function handleAdminCatalogClick(event) {
    const button = event.target.closest("[data-admin-action]");
    if (!button) return;

    const productId = button.dataset.productId;
    if (!productId) return;

    const action = button.dataset.adminAction;
    if (action === "edit") {
        editAdminProduct(productId);
        return;
    }

    if (action === "delete") {
        deleteAdminProduct(productId);
        return;
    }

    if (action === "toggle-status") {
        toggleAdminProductStatus(productId, button.dataset.nextActive === "true");
    }
}

async function uploadAdminProductImage(file) {
    const client = getSupabaseClient();
    if (!client || !file) return "";
    const extension = file.name.includes(".") ? file.name.split(".").pop() : "png";
    const fileName = `${Date.now()}-${slugify(file.name.replace(/\.[^.]+$/, "")) || "menu-image"}.${extension}`;
    const filePath = `products/${fileName}`;
    const { error } = await client.storage.from(getSupabaseBucket()).upload(filePath, file, { cacheControl: "3600", upsert: true });
    if (error) throw error;
    const { data } = client.storage.from(getSupabaseBucket()).getPublicUrl(filePath);
    return data?.publicUrl || "";
}

async function saveAdminProduct(event) {
    event.preventDefault();
    const client = getSupabaseClient();
    if (!client) {
        setAdminStatus("Add your Supabase credentials in supabase-config.js first.", "error");
        return;
    }

    const name = document.getElementById("admin-name")?.value.trim() || "";
    const short = document.getElementById("admin-short")?.value.trim() || "";
    const type = document.getElementById("admin-type")?.value || "";
    const collection = document.getElementById("admin-collection")?.value || "";
    const orderStyle = document.getElementById("admin-orderStyle")?.value || "";
    const method = document.getElementById("admin-method")?.value || "";
    const isActive = document.getElementById("admin-is-active")?.checked ?? true;
    const imageUrlField = document.getElementById("admin-image-url");
    const imageFileField = document.getElementById("admin-image-file");

    if (!name || !short || !type || !collection || !orderStyle) {
        setAdminStatus("Name, description, type, collection, and order style are required.", "error");
        return;
    }

    try {
        setAdminStatus("Saving product to Supabase...", "muted");
        const wasEditing = Boolean(adminEditingId);
        let imageUrl = imageUrlField?.value.trim() || "";
        const selectedFile = imageFileField?.files?.[0];
        if (selectedFile) {
            imageUrl = await uploadAdminProductImage(selectedFile);
            if (imageUrlField) imageUrlField.value = imageUrl;
        }

        const payload = createProductPayload({
            name,
            short,
            img: imageUrl || DEFAULT_MENU_IMAGE,
            type,
            collection,
            orderStyle,
            method,
            occasion: getAdminSelection("occasion"),
            preferences: getAdminSelection("preferences"),
            volume: getAdminSelection("volume"),
            bestsellers: getAdminSelection("bestsellers"),
            isActive
        });

        const response = adminEditingId
            ? await client.from(SUPABASE_MENU_TABLE).update(payload).eq("id", adminEditingId)
            : await client.from(SUPABASE_MENU_TABLE).insert(payload);

        if (response.error) throw response.error;
        resetAdminProductForm();
        await refreshAdminProducts();
        notifyMenuSync(wasEditing ? "product update" : "product publish");
        setAdminStatus(wasEditing ? "Product updated successfully." : "Product published successfully.", "success");
        showToast(
            wasEditing
                ? "Product updated successfully and synced to the menu."
                : "Product published successfully and pushed to the menu page.",
            "success"
        );
    } catch (error) {
        console.error("Unable to save product:", error);
        setAdminStatus(error.message || "Could not save that product.", "error");
        showToast(error.message || "Could not save that product.", "error");
    }
}

async function deleteAdminProduct(productId) {
    if (!window.confirm("Delete this product from the Supabase menu catalog?")) return;
    const client = getSupabaseClient();
    if (!client) return;
    try {
        const { error } = await client.from(SUPABASE_MENU_TABLE).delete().eq("id", productId);
        if (error) throw error;
        await refreshAdminProducts();
        notifyMenuSync("product delete");
        setAdminStatus("Product deleted.", "success");
        showToast("Product deleted and removed from the menu sync.", "success");
    } catch (error) {
        console.error("Unable to delete product:", error);
        setAdminStatus(error.message || "Could not delete that product.", "error");
        showToast(error.message || "Could not delete that product.", "error");
    }
}

async function toggleAdminProductStatus(productId, isActive) {
    const client = getSupabaseClient();
    if (!client) return;
    try {
        const { error } = await client.from(SUPABASE_MENU_TABLE).update({ is_active: isActive }).eq("id", productId);
        if (error) throw error;
        await refreshAdminProducts();
        notifyMenuSync(isActive ? "product publish" : "product draft update");
        setAdminStatus(isActive ? "Product published." : "Product moved to draft.", "success");
        showToast(
            isActive
                ? "Product published successfully and pushed to the menu page."
                : "Product moved to draft and removed from the live menu.",
            "success"
        );
    } catch (error) {
        console.error("Unable to update product status:", error);
        setAdminStatus(error.message || "Could not update that product.", "error");
        showToast(error.message || "Could not update that product.", "error");
    }
}

async function initAdminPage() {
    const node = document.getElementById("admin-platform");
    if (!node) return;

    subscribeToLocalMenuSync();
    renderAdminFilterGroups();
    resetAdminProductForm();

    const imageUrlField = document.getElementById("admin-image-url");
    if (imageUrlField) imageUrlField.addEventListener("input", event => updateAdminImagePreview(event.target.value.trim()));

    const imageFileField = document.getElementById("admin-image-file");
    if (imageFileField) {
        imageFileField.addEventListener("change", event => {
            const selectedFile = event.target.files?.[0];
            if (!selectedFile) return;
            updateAdminImagePreview(URL.createObjectURL(selectedFile));
        });
    }

    const productForm = document.getElementById("admin-product-form");
    if (productForm) productForm.addEventListener("submit", saveAdminProduct);

    const resetButton = document.getElementById("admin-reset-form");
    if (resetButton) resetButton.addEventListener("click", resetAdminProductForm);

    const productList = document.getElementById("admin-product-list");
    if (productList) productList.addEventListener("click", handleAdminCatalogClick);

    if (!isSupabaseReady()) {
        setAdminSetupMessage("Add your Supabase URL, anon key, and storage bucket in supabase-config.js, then reload this page.");
        setAdminStatus("Supabase is not configured yet.", "error");
        return;
    }

    setAdminSetupMessage(`Connected to ${getSupabaseConfig().url}`);
    await refreshAdminProducts();
    subscribeToAdminRealtime();
    setAdminStatus("Admin platform ready with realtime sync.", "success");
}

window.editAdminProduct = editAdminProduct;
window.deleteAdminProduct = deleteAdminProduct;
window.toggleAdminProductStatus = toggleAdminProductStatus;

async function initMenuPage() {
    subscribeToLocalMenuSync();
    renderMenuFilters();
    initMenuSearch();
    await syncMenuProductsFromBackend();
    const params = new URLSearchParams(window.location.search);
    applyMenuView(params.get("view") || "all");
    subscribeToMenuRealtime();
    const panel = document.getElementById("menu-filters-panel");
    const layout = document.getElementById("menu-layout");
    if (panel && window.innerWidth < 1024) {
        panel.classList.add("collapsible-filter-hidden");
        if (layout) layout.classList.add("menu-layout-full");
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    setFooterYear();
    initActiveNav();
    setCheckoutDateMin();
    document.addEventListener("keydown", handleGlobalKeydown);
    if (window.lucide) lucide.createIcons();
    if (document.getElementById("review-feed")) loadReviews();
    if (document.getElementById("menu-filters")) await initMenuPage();
    if (document.getElementById("admin-platform")) await initAdminPage();
});
