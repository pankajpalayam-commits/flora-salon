import { useState, useMemo } from "react";
import {
  Flower2, Calendar, Users, LayoutDashboard, Settings, Search,
  Plus, LogOut, Check, X, Clock, ChevronRight, Delete
} from "lucide-react";

const C = {
  bg: "#FAF7F2",
  card: "#FFFFFF",
  border: "#E4DDD2",
  text: "#2E2A27",
  muted: "#8A8177",
  mauve: "#A8557A",
  mauveLight: "#F3E4EC",
  sage: "#5C7A52",
  sageLight: "#EAF0E7",
  gold: "#A67722",
  goldLight: "#FBF0DC",
  red: "#B94A3D",
  redLight: "#F8E6E3",
};

const fontDisplay = "'Fraunces', Georgia, serif";
const fontBody = "'Inter', system-ui, sans-serif";

const STYLISTS = [
  { id: "s1", name: "Anita", specialty: "Hair colour, keratin" },
  { id: "s2", name: "Rina J.", specialty: "Cuts, styling" },
  { id: "s3", name: "Sana K.", specialty: "Facials, spa" },
];

const SERVICES = [
  { id: "sv1", name: "Haircut", duration: 30, price: 25 },
  { id: "sv2", name: "Hair colour", duration: 90, price: 80 },
  { id: "sv3", name: "Keratin treatment", duration: 120, price: 150 },
  { id: "sv4", name: "Classic facial", duration: 45, price: 40 },
  { id: "sv5", name: "Kids haircut", duration: 20, price: 15 },
];

const CLIENTS_INIT = [
  { id: "c1", code: "FL000001", name: "Meera Nair", phone: "9876543210",
    general: "Prefers Anita for colour", allergy: "", privateNote: "Occasionally pays late",
    firstVisit: "11 Mar 2024", lastVisit: "10 Jul 2026" },
  { id: "c2", code: "FL000002", name: "Divya Kumar", phone: "9876500011",
    general: "", allergy: "Sensitive to ammonia-based dyes", privateNote: "",
    firstVisit: "5 Jan 2025", lastVisit: "18 Jul 2026" },
  { id: "c3", code: "FL000003", name: "Priya Sharma", phone: "9876511122",
    general: "Regular, sometimes brings kids", allergy: "", privateNote: "",
    firstVisit: "20 Nov 2023", lastVisit: "30 Jun 2026" },
];

const APPTS_INIT = [
  { id: "a1", clientId: "c1", stylistId: "s1", serviceIds: ["sv2"], time: "9:00 AM", status: "completed" },
  { id: "a2", clientId: "c2", stylistId: "s2", serviceIds: ["sv1"], time: "10:00 AM", status: "in_progress" },
  { id: "a3", clientId: "c3", stylistId: "s3", serviceIds: ["sv4"], time: "11:00 AM", status: "checked_in" },
  { id: "a4", clientId: "c1", stylistId: "s1", serviceIds: ["sv1", "sv2"], time: "2:00 PM", status: "booked" },
  { id: "a5", clientId: "c2", stylistId: "s3", serviceIds: ["sv4"], time: "3:00 PM", status: "no_show" },
];

const STATUS_META = {
  booked: { label: "Booked", color: C.muted, bg: "#EFEBE4" },
  checked_in: { label: "Checked in", color: C.gold, bg: C.goldLight },
  in_progress: { label: "In progress", color: C.gold, bg: C.goldLight },
  completed: { label: "Completed", color: C.sage, bg: C.sageLight },
  cancelled: { label: "Cancelled", color: C.red, bg: C.redLight },
  no_show: { label: "No show", color: C.red, bg: C.redLight },
};

function Petal({ status }) {
  const m = STATUS_META[status];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      fontSize: 12, fontWeight: 600, color: m.color, background: m.bg,
      padding: "3px 10px", borderRadius: 999,
    }}>
      <Flower2 size={12} strokeWidth={2.5} />
      {m.label}
    </span>
  );
}

function nextStatus(status) {
  if (status === "booked") return "checked_in";
  if (status === "checked_in") return "in_progress";
  if (status === "in_progress") return "completed";
  return null;
}

export default function App() {
  const [screen, setScreen] = useState("login");
  const [role, setRole] = useState(null);
  const [staffName, setStaffName] = useState(null);
  const [pin, setPin] = useState("");
  const [clients, setClients] = useState(CLIENTS_INIT);
  const [appointments, setAppointments] = useState(APPTS_INIT);
  const [selectedClientId, setSelectedClientId] = useState(null);
  const [clientSearch, setClientSearch] = useState("");

  const clientById = (id) => clients.find((c) => c.id === id);
  const stylistById = (id) => STYLISTS.find((s) => s.id === id);
  const serviceById = (id) => SERVICES.find((s) => s.id === id);

  function login(asRole, name) {
    setRole(asRole);
    setStaffName(name || (asRole === "owner" ? "Owner" : null));
    setScreen("today");
  }

  function logout() {
    setRole(null);
    setStaffName(null);
    setPin("");
    setScreen("login");
  }

  function advanceAppt(id) {
    setAppointments((prev) =>
      prev.map((a) => {
        if (a.id !== id) return a;
        const next = nextStatus(a.status);
        return next ? { ...a, status: next } : a;
      })
    );
  }

  function markApptStatus(id, status) {
    setAppointments((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
  }

  const shell = {
    display: "flex", minHeight: 560, fontFamily: fontBody, color: C.text,
    background: C.bg, borderRadius: 16, overflow: "hidden", border: `1px solid ${C.border}`,
  };

  if (screen === "login") {
    return (
      <div style={{ ...shell, alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap');`}</style>
        <LoginCard onLogin={login} pin={pin} setPin={setPin} />
      </div>
    );
  }

  return (
    <div style={shell}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap');`}</style>

      <nav style={{
        width: 84, background: "#FFFFFF", borderRight: `1px solid ${C.border}`,
        display: "flex", flexDirection: "column", alignItems: "center", padding: "20px 0", gap: 4,
      }}>
        <div style={{ marginBottom: 20, textAlign: "center" }}>
          <Flower2 size={22} color={C.mauve} />
        </div>
        <NavItem icon={<Clock size={18} />} label="Today" active={screen === "today"} onClick={() => setScreen("today")} />
        <NavItem icon={<Plus size={18} />} label="New" active={screen === "new"} onClick={() => setScreen("new")} />
        <NavItem icon={<Users size={18} />} label="Clients" active={screen === "clients" || screen === "client"} onClick={() => setScreen("clients")} />
        <NavItem icon={<Calendar size={18} />} label="Calendar" active={screen === "calendar"} onClick={() => setScreen("calendar")} />
        {role === "owner" && (
          <>
            <NavItem icon={<LayoutDashboard size={18} />} label="Dash" active={screen === "dashboard"} onClick={() => setScreen("dashboard")} />
            <NavItem icon={<Settings size={18} />} label="Staff" active={screen === "settings"} onClick={() => setScreen("settings")} />
          </>
        )}
        <div style={{ flex: 1 }} />
        <NavItem icon={<LogOut size={18} />} label="Exit" onClick={logout} />
      </nav>

      <main style={{ flex: 1, padding: "24px 32px", overflow: "auto" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
          <h1 style={{ fontFamily: fontDisplay, fontSize: 24, fontWeight: 600, margin: 0 }}>
            {screen === "today" && "Today"}
            {screen === "new" && "New appointment"}
            {screen === "clients" && "Clients"}
            {screen === "client" && "Client profile"}
            {screen === "calendar" && "Calendar"}
            {screen === "dashboard" && "Dashboard"}
            {screen === "settings" && "Staff & settings"}
          </h1>
          <span style={{ fontSize: 13, color: C.muted }}>
            {role === "owner" ? "Owner" : staffName} &middot; Flora Family Salon
          </span>
        </header>

        {screen === "today" && (
          <TodayScreen
            appointments={appointments}
            clientById={clientById}
            stylistById={stylistById}
            serviceById={serviceById}
            advanceAppt={advanceAppt}
            markApptStatus={markApptStatus}
          />
        )}

        {screen === "new" && (
          <NewAppointmentScreen
            clients={clients}
            setClients={setClients}
            setAppointments={setAppointments}
            onDone={() => setScreen("today")}
          />
        )}

        {screen === "clients" && (
          <ClientsScreen
            clients={clients}
            search={clientSearch}
            setSearch={setClientSearch}
            onSelect={(id) => { setSelectedClientId(id); setScreen("client"); }}
          />
        )}

        {screen === "client" && (
          <ClientProfileScreen
            client={clientById(selectedClientId)}
            appointments={appointments.filter((a) => a.clientId === selectedClientId)}
            stylistById={stylistById}
            serviceById={serviceById}
            role={role}
            onBack={() => setScreen("clients")}
          />
        )}

        {screen === "calendar" && (
          <CalendarScreen appointments={appointments} clientById={clientById} stylistById={stylistById} />
        )}

        {screen === "dashboard" && role === "owner" && (
          <DashboardScreen appointments={appointments} />
        )}

        {screen === "settings" && role === "owner" && <SettingsScreen />}
      </main>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
        width: 64, padding: "8px 0", border: "none", background: active ? C.mauveLight : "transparent",
        color: active ? C.mauve : C.muted, borderRadius: 10, cursor: "pointer", fontFamily: fontBody,
      }}
    >
      {icon}
      <span style={{ fontSize: 10, fontWeight: 500 }}>{label}</span>
    </button>
  );
}

function LoginCard({ onLogin, pin, setPin }) {
  const [mode, setMode] = useState("reception");
  const [picked, setPicked] = useState(null);

  const staffOptions = [
    { name: "Anita", initials: "AN" },
    { name: "Rina J.", initials: "RJ" },
    { name: "Sana K.", initials: "SK" },
  ];

  function tapDigit(d) {
    if (pin.length >= 4) return;
    const next = pin + d;
    setPin(next);
    if (next.length === 4) {
      setTimeout(() => onLogin("reception", picked || "Reception"), 200);
    }
  }

  return (
    <div style={{ background: C.card, borderRadius: 16, padding: 32, width: 340, border: `1px solid ${C.border}` }}>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div style={{
          width: 52, height: 52, borderRadius: "50%", background: C.mauveLight,
          display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px",
        }}>
          <Flower2 size={26} color={C.mauve} />
        </div>
        <div style={{ fontFamily: fontDisplay, fontSize: 20, fontWeight: 600 }}>Flora salon</div>
        <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>
          {mode === "reception" ? "Reception desk" : "Owner login"}
        </div>
      </div>

      {mode === "reception" ? (
        <>
          <p style={{ fontSize: 12, color: C.muted, marginBottom: 8 }}>Who's checking in?</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginBottom: 18 }}>
            {staffOptions.map((s) => (
              <button
                key={s.name}
                onClick={() => setPicked(s.name)}
                style={{
                  background: picked === s.name ? C.mauveLight : "#FAF7F2",
                  border: picked === s.name ? `2px solid ${C.mauve}` : `1px solid ${C.border}`,
                  borderRadius: 12, padding: "10px 4px", cursor: "pointer", fontFamily: fontBody,
                }}
              >
                <div style={{
                  width: 34, height: 34, borderRadius: "50%", background: C.mauve, color: "#fff",
                  fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 6px",
                }}>{s.initials}</div>
                <div style={{ fontSize: 11 }}>{s.name}</div>
              </button>
            ))}
          </div>

          <p style={{ fontSize: 12, color: C.muted, marginBottom: 8 }}>Enter PIN</p>
          <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} style={{
                flex: 1, height: 34, borderRadius: 8, background: "#FAF7F2",
                border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {pin[i] ? "•" : ""}
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, marginBottom: 14 }}>
            {["1","2","3","4","5","6","7","8","9"].map((d) => (
              <button key={d} onClick={() => tapDigit(d)} style={numpadBtn}>{d}</button>
            ))}
            <div />
            <button onClick={() => tapDigit("0")} style={numpadBtn}>0</button>
            <button onClick={() => setPin(pin.slice(0, -1))} style={numpadBtn}>
              <Delete size={16} />
            </button>
          </div>

          <div style={{ textAlign: "center" }}>
            <button onClick={() => setMode("owner")} style={linkBtn}>Owner login</button>
          </div>
        </>
      ) : (
        <>
          <input placeholder="owner@floramail.com" style={inputStyle} />
          <input placeholder="Password" type="password" style={{ ...inputStyle, marginTop: 10 }} />
          <button onClick={() => onLogin("owner")} style={{ ...primaryBtn, width: "100%", marginTop: 16 }}>
            Sign in
          </button>
          <div style={{ textAlign: "center", marginTop: 12 }}>
            <button onClick={() => setMode("reception")} style={linkBtn}>Back to reception login</button>
          </div>
        </>
      )}
    </div>
  );
}

const numpadBtn = {
  height: 44, borderRadius: 10, border: `1px solid ${C.border}`, background: "#FAF7F2",
  fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
  fontFamily: fontBody,
};
const linkBtn = { background: "none", border: "none", color: C.muted, fontSize: 12, cursor: "pointer", textDecoration: "underline" };
const primaryBtn = { background: C.mauve, color: "#fff", border: "none", borderRadius: 10, padding: "10px 16px", fontWeight: 600, cursor: "pointer", fontFamily: fontBody };
const secondaryBtn = { background: "#fff", color: C.text, border: `1px solid ${C.border}`, borderRadius: 10, padding: "8px 14px", fontWeight: 500, cursor: "pointer", fontFamily: fontBody };
const inputStyle = { width: "100%", boxSizing: "border-box", padding: "10px 12px", borderRadius: 10, border: `1px solid ${C.border}`, fontSize: 14, fontFamily: fontBody };
const card = { background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 16 };

function TodayScreen({ appointments, clientById, stylistById, serviceById, advanceAppt, markApptStatus }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {appointments.map((a) => {
        const client = clientById(a.clientId);
        const stylist = stylistById(a.stylistId);
        const services = a.serviceIds.map((id) => serviceById(id).name).join(" + ");
        const next = nextStatus(a.status);
        const active = a.status !== "completed" && a.status !== "cancelled" && a.status !== "no_show";
        return (
          <div key={a.id} style={{ ...card, display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 68, fontSize: 13, color: C.muted, fontWeight: 500 }}>{a.time}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{client.name}</div>
              <div style={{ fontSize: 12, color: C.muted }}>{services} &middot; {stylist.name}</div>
            </div>
            <Petal status={a.status} />
            {active && (
              <div style={{ display: "flex", gap: 6 }}>
                {next && (
                  <button onClick={() => advanceAppt(a.id)} style={secondaryBtn}>
                    Mark {STATUS_META[next].label.toLowerCase()}
                  </button>
                )}
                <button onClick={() => markApptStatus(a.id, "no_show")} title="No show" style={{ ...secondaryBtn, padding: 8 }}>
                  <X size={14} />
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function NewAppointmentScreen({ clients, setClients, setAppointments, onDone }) {
  const [search, setSearch] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [stylistId, setStylistId] = useState(STYLISTS[0].id);
  const [serviceIds, setServiceIds] = useState([]);
  const [time, setTime] = useState("");

  const matches = useMemo(
    () => clients.filter((c) => c.phone.includes(search) || c.name.toLowerCase().includes(search.toLowerCase())),
    [clients, search]
  );

  const totalDuration = serviceIds.reduce((sum, id) => sum + SERVICES.find((s) => s.id === id).duration, 0);
  const totalPrice = serviceIds.reduce((sum, id) => sum + SERVICES.find((s) => s.id === id).price, 0);

  function toggleService(id) {
    setServiceIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function addNewClient() {
    const id = "c" + (clients.length + 1);
    const code = "FL" + String(clients.length + 1).padStart(6, "0");
    const client = { id, code, name: newName, phone: newPhone, general: "", allergy: "", privateNote: "", firstVisit: "", lastVisit: "" };
    setClients((prev) => [...prev, client]);
    setSelectedClient(client);
    setShowAdd(false);
  }

  function createAppointment() {
    if (!selectedClient || serviceIds.length === 0 || !time) return;
    setAppointments((prev) => [
      ...prev,
      { id: "a" + Date.now(), clientId: selectedClient.id, stylistId, serviceIds, time, status: "booked" },
    ]);
    onDone();
  }

  return (
    <div style={{ maxWidth: 480, display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <label style={labelStyle}>Client</label>
        {!selectedClient ? (
          <>
            <div style={{ position: "relative" }}>
              <Search size={14} style={{ position: "absolute", left: 10, top: 12, color: C.muted }} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or phone"
                style={{ ...inputStyle, paddingLeft: 30 }}
              />
            </div>
            {search && (
              <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 6 }}>
                {matches.map((c) => (
                  <button key={c.id} onClick={() => setSelectedClient(c)} style={{ ...secondaryBtn, textAlign: "left" }}>
                    {c.name} &middot; {c.phone}
                  </button>
                ))}
                {matches.length === 0 && !showAdd && (
                  <button onClick={() => { setShowAdd(true); setNewName(search.match(/\d/) ? "" : search); setNewPhone(search.match(/^\d+$/) ? search : ""); }} style={{ ...secondaryBtn, textAlign: "left" }}>
                    <Plus size={12} style={{ verticalAlign: -1, marginRight: 4 }} /> Add new client
                  </button>
                )}
                {matches.length > 0 && (
                  <div style={{ fontSize: 12, color: C.muted }}>Existing customer found — select above, or:</div>
                )}
                {matches.length > 0 && !showAdd && (
                  <button onClick={() => setShowAdd(true)} style={{ ...linkBtn, textAlign: "left" }}>+ add as new client instead</button>
                )}
              </div>
            )}
            {showAdd && (
              <div style={{ ...card, marginTop: 8, display: "flex", flexDirection: "column", gap: 8 }}>
                <input placeholder="Full name" value={newName} onChange={(e) => setNewName(e.target.value)} style={inputStyle} />
                <input placeholder="Phone number" value={newPhone} onChange={(e) => setNewPhone(e.target.value)} style={inputStyle} />
                <button onClick={addNewClient} style={primaryBtn}>Add client</button>
              </div>
            )}
          </>
        ) : (
          <div style={{ ...card, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{selectedClient.name}</div>
              <div style={{ fontSize: 12, color: C.muted }}>{selectedClient.code} &middot; {selectedClient.phone}</div>
            </div>
            <button onClick={() => setSelectedClient(null)} style={linkBtn}>Change</button>
          </div>
        )}
      </div>

      <div>
        <label style={labelStyle}>Stylist</label>
        <div style={{ display: "flex", gap: 8 }}>
          {STYLISTS.map((s) => (
            <button
              key={s.id}
              onClick={() => setStylistId(s.id)}
              style={{
                ...secondaryBtn,
                background: stylistId === s.id ? C.mauveLight : "#fff",
                borderColor: stylistId === s.id ? C.mauve : C.border,
              }}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label style={labelStyle}>Services</label>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {SERVICES.map((s) => (
            <label key={s.id} style={{ ...card, display: "flex", alignItems: "center", gap: 10, cursor: "pointer", padding: "10px 14px" }}>
              <input type="checkbox" checked={serviceIds.includes(s.id)} onChange={() => toggleService(s.id)} />
              <span style={{ flex: 1, fontSize: 14 }}>{s.name}</span>
              <span style={{ fontSize: 12, color: C.muted }}>{s.duration} min &middot; ${s.price}</span>
            </label>
          ))}
        </div>
        {serviceIds.length > 0 && (
          <div style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>
            Total: {totalDuration} min &middot; ${totalPrice}
          </div>
        )}
      </div>

      <div>
        <label style={labelStyle}>Time</label>
        <input value={time} onChange={(e) => setTime(e.target.value)} placeholder="e.g. 4:00 PM" style={inputStyle} />
      </div>

      <button onClick={createAppointment} style={{ ...primaryBtn, alignSelf: "flex-start" }}>
        Create appointment
      </button>
    </div>
  );
}

const labelStyle = { display: "block", fontSize: 12, fontWeight: 600, color: C.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.3 };

function ClientsScreen({ clients, search, setSearch, onSelect }) {
  const filtered = clients.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search)
  );
  return (
    <div style={{ maxWidth: 480 }}>
      <div style={{ position: "relative", marginBottom: 14 }}>
        <Search size={14} style={{ position: "absolute", left: 10, top: 12, color: C.muted }} />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, phone, or last 4 digits" style={{ ...inputStyle, paddingLeft: 30 }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtered.map((c) => (
          <button key={c.id} onClick={() => onSelect(c.id)} style={{ ...card, display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", width: "100%", textAlign: "left" }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{c.name}</div>
              <div style={{ fontSize: 12, color: C.muted }}>{c.code} &middot; {c.phone}</div>
            </div>
            <ChevronRight size={16} color={C.muted} />
          </button>
        ))}
      </div>
    </div>
  );
}

function ClientProfileScreen({ client, appointments, stylistById, serviceById, role, onBack }) {
  if (!client) return null;
  return (
    <div style={{ maxWidth: 480, display: "flex", flexDirection: "column", gap: 14 }}>
      <button onClick={onBack} style={{ ...linkBtn, alignSelf: "flex-start" }}>&larr; Back to clients</button>
      <div style={card}>
        <div style={{ fontFamily: fontDisplay, fontSize: 18, fontWeight: 600 }}>{client.name}</div>
        <div style={{ fontSize: 12, color: C.muted, marginBottom: 10 }}>{client.code} &middot; {client.phone}</div>
        <div style={{ display: "flex", gap: 20, fontSize: 12, color: C.muted }}>
          <div>First visit<br /><span style={{ color: C.text, fontWeight: 500 }}>{client.firstVisit || "—"}</span></div>
          <div>Last visit<br /><span style={{ color: C.text, fontWeight: 500 }}>{client.lastVisit || "—"}</span></div>
        </div>
      </div>
      {client.allergy && (
        <div style={{ ...card, background: C.redLight, border: "none" }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: C.red, marginBottom: 4 }}>ALLERGY / MEDICAL NOTE</div>
          <div style={{ fontSize: 13 }}>{client.allergy}</div>
        </div>
      )}
      {client.general && (
        <div style={card}>
          <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, marginBottom: 4 }}>GENERAL NOTES</div>
          <div style={{ fontSize: 13 }}>{client.general}</div>
        </div>
      )}
      {role === "owner" && client.privateNote && (
        <div style={{ ...card, background: C.mauveLight, border: "none" }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: C.mauve, marginBottom: 4 }}>PRIVATE NOTE (owner only)</div>
          <div style={{ fontSize: 13 }}>{client.privateNote}</div>
        </div>
      )}
      <div>
        <div style={{ fontSize: 11, fontWeight: 600, color: C.muted, marginBottom: 6 }}>APPOINTMENT HISTORY</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {appointments.length === 0 && <div style={{ fontSize: 13, color: C.muted }}>No appointments yet.</div>}
          {appointments.map((a) => (
            <div key={a.id} style={{ ...card, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 13 }}>
                {a.time} &middot; {a.serviceIds.map((id) => serviceById(id).name).join(" + ")} &middot; {stylistById(a.stylistId).name}
              </div>
              <Petal status={a.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CalendarScreen({ appointments, clientById, stylistById }) {
  return (
    <div>
      <div style={{ fontSize: 12, color: C.muted, marginBottom: 10 }}>Today shown &middot; full week view coming once this is wired to a real calendar</div>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${STYLISTS.length}, 1fr)`, gap: 12 }}>
        {STYLISTS.map((s) => (
          <div key={s.id}>
            <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 8 }}>{s.name}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {appointments.filter((a) => a.stylistId === s.id).map((a) => (
                <div key={a.id} style={{ ...card, padding: 10 }}>
                  <div style={{ fontSize: 11, color: C.muted }}>{a.time}</div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{clientById(a.clientId).name}</div>
                  <div style={{ marginTop: 4 }}><Petal status={a.status} /></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardScreen({ appointments }) {
  const total = appointments.length;
  const completed = appointments.filter((a) => a.status === "completed").length;
  const noShows = appointments.filter((a) => a.status === "no_show").length;
  const upcoming = appointments.filter((a) => a.status === "booked").length;
  const metrics = [
    { label: "Today's bookings", value: total },
    { label: "Completed today", value: completed },
    { label: "Upcoming today", value: upcoming },
    { label: "No-shows today", value: noShows },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, maxWidth: 640 }}>
      {metrics.map((m) => (
        <div key={m.label} style={{ background: C.mauveLight, borderRadius: 12, padding: 16 }}>
          <div style={{ fontSize: 12, color: C.mauve }}>{m.label}</div>
          <div style={{ fontFamily: fontDisplay, fontSize: 26, fontWeight: 600, marginTop: 4 }}>{m.value}</div>
        </div>
      ))}
    </div>
  );
}

function SettingsScreen() {
  return (
    <div style={{ maxWidth: 480, display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.muted, marginBottom: 8 }}>STYLISTS</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {STYLISTS.map((s) => (
            <div key={s.id} style={{ ...card, display: "flex", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{s.name}</div>
                <div style={{ fontSize: 12, color: C.muted }}>{s.specialty}</div>
              </div>
            </div>
          ))}
        </div>
        <button style={{ ...secondaryBtn, marginTop: 8 }}><Plus size={12} style={{ verticalAlign: -1, marginRight: 4 }} />Add stylist</button>
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, color: C.muted, marginBottom: 8 }}>RECEPTION LOGINS</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {["Anita", "Rina J.", "Sana K."].map((n) => (
            <div key={n} style={{ ...card, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 14 }}>{n}</span>
              <button style={linkBtn}>Reset PIN</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
