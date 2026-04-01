import { Search, ExternalLink, CheckCircle2, Info, Landmark, Filter } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

const schemes = [
  {
    id: 1,
    title: "PM-Kisan Samman Nidhi",
    description: "An initiative by the Government of India in which all farmers will get up to ₹6,000 per year as minimum income support.",
    eligibility: ["Small and marginal farmers", "Landholding up to 2 hectares", "Indian citizenship"],
    benefits: "Direct income support of ₹6,000 per year in three installments.",
    category: "Income Support"
  },
  {
    id: 2,
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    description: "A government-sponsored crop insurance scheme that integrates multiple stakeholders for risk management.",
    eligibility: ["All farmers including sharecroppers", "Tenant farmers growing notified crops", "Compulsory for loanee farmers"],
    benefits: "Comprehensive insurance cover against failure of the crop.",
    category: "Insurance"
  },
  {
    id: 3,
    title: "Kisan Credit Card (KCC)",
    description: "Provides farmers with timely access to credit for their cultivation and other needs as well as for contingency expenses.",
    eligibility: ["All farmers – individuals/joint borrowers", "Tenant farmers", "Oral lessees & sharecroppers"],
    benefits: "Credit for crop production, repair of farm assets, and consumption needs.",
    category: "Credit"
  },
  {
    id: 4,
    title: "Soil Health Card Scheme",
    description: "Promotes soil test based and balanced use of fertilizers to enable farmers to realize higher yields at lower cost.",
    eligibility: ["All farmers across the country", "No specific landholding limit"],
    benefits: "Detailed report on soil health and recommendations for fertilizers.",
    category: "Advisory"
  },
  {
    id: 5,
    title: "Paramparagat Krishi Vikas Yojana (PKVY)",
    description: "Promotes organic farming through a cluster approach and PGS (Participatory Guarantee System) certification.",
    eligibility: ["Groups of farmers (clusters)", "Minimum 50 farmers per cluster", "Focus on North East and hilly areas"],
    benefits: "Financial assistance for organic inputs, certification, and marketing.",
    category: "Organic Farming"
  }
];

const categories = ["All", "Income Support", "Insurance", "Credit", "Advisory", "Organic Farming"];

// Win2k color palette
// Background: #D4D0C8 (classic gray)
// Dark border: #808080
// Light border: #FFFFFF
// Title bar: #000080 (navy)
// Button face: #D4D0C8
// Sunken: inset

export default function GovernmentSchemes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || scheme.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      style={{
        background: "#D4D0C8",
        minHeight: "100vh",
        fontFamily: "'MS Sans Serif', 'Microsoft Sans Serif', Tahoma, Arial, sans-serif",
        fontSize: "11px",
        color: "#000000",
        padding: "12px",
      }}
    >
      {/* Main Window */}
      <div style={win2kWindow}>
        {/* Title Bar */}
        <div style={titleBar}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {/* Window icon */}
            <div style={titleIcon}>
              <Landmark size={12} color="#FFFF00" />
            </div>
            <span style={{ fontWeight: "bold", fontSize: "12px", letterSpacing: "0.02em" }}>
              Government Schemes - KrishiAI Agricultural Portal
            </span>
          </div>
          <div style={{ display: "flex", gap: "2px" }}>
            <Win2kTitleBtn label="—" />
            <Win2kTitleBtn label="□" />
            <Win2kTitleBtn label="✕" danger />
          </div>
        </div>

        {/* Menu Bar */}
        <div style={menuBar}>
          {["File", "Edit", "View", "Favorites", "Tools", "Help"].map(m => (
            <span key={m} style={menuItem}>{m}</span>
          ))}
        </div>

        {/* Toolbar / Address Bar */}
        <div style={toolbarBar}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", flex: 1 }}>
            <Win2kToolBtn label="◄" />
            <Win2kToolBtn label="►" />
            <Win2kToolBtn label="✕" />
            <Win2kToolBtn label="⟳" />
            <div style={{ width: "1px", height: "20px", background: "#808080", margin: "0 4px" }} />
            <Win2kToolBtn label="🏠" />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", flex: 2 }}>
            <span style={{ fontSize: "11px", marginRight: "4px" }}>Address</span>
            <div style={{ ...sunkenField, flex: 1, display: "flex", alignItems: "center", padding: "1px 4px", fontSize: "11px" }}>
              https://krishiai.gov.in/schemes
            </div>
            <Win2kToolBtn label="Go" />
          </div>
        </div>

        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
          {/* Left Sidebar / Explorer Bar */}
          <div style={sidebarStyle}>
            <div style={sidebarTitle}>Scheme Categories</div>
            <div style={{ padding: "4px 0" }}>
              {categories.map(cat => (
                <div
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    ...sidebarItem,
                    background: activeCategory === cat ? "#000080" : "transparent",
                    color: activeCategory === cat ? "#FFFFFF" : "#000000",
                    fontWeight: activeCategory === cat ? "bold" : "normal",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ marginRight: "6px" }}>📁</span>
                  {cat}
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #808080", margin: "8px 0" }} />
            <div style={sidebarTitle}>Quick Info</div>
            <div style={{ padding: "6px 8px", fontSize: "10px", lineHeight: "1.6", color: "#000080" }}>
              <p>Total Schemes: {schemes.length}</p>
              <p>Filtered: {filteredSchemes.length}</p>
              <p style={{ marginTop: "8px", color: "#000000" }}>
                Click a category to filter. Use the search box above to find specific schemes.
              </p>
            </div>
          </div>

          {/* Main Content Area */}
          <div style={{ flex: 1, overflowY: "auto", background: "#FFFFFF", padding: "0" }}>
            {/* Page Header - inside content */}
            <div style={{ background: "#D4D0C8", borderBottom: "2px solid #808080", padding: "8px 12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Landmark size={20} color="#000080" />
              <div>
                <div style={{ fontWeight: "bold", fontSize: "14px", color: "#000080" }}>
                  Government Agricultural Schemes
                </div>
                <div style={{ fontSize: "10px", color: "#444444" }}>
                  Stay updated with the latest schemes and subsidies provided by the Government of India.
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div style={{ padding: "8px 12px", background: "#ECE9D8", borderBottom: "1px solid #ACA899", display: "flex", alignItems: "center", gap: "8px" }}>
              <Filter size={14} color="#444" />
              <span style={{ fontSize: "11px", fontWeight: "bold" }}>Search:</span>
              <div style={{ ...sunkenField, display: "flex", alignItems: "center", flex: 1, maxWidth: "320px" }}>
                <Search size={12} color="#808080" style={{ margin: "0 4px" }} />
                <input
                  type="text"
                  placeholder="Search schemes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    flex: 1,
                    fontSize: "11px",
                    fontFamily: "'MS Sans Serif', Tahoma, Arial, sans-serif",
                    padding: "2px 2px",
                    color: "#000000",
                  }}
                />
              </div>
              <Win2kButton>Find</Win2kButton>
              <Win2kButton onClick={() => setSearchTerm("")}>Clear</Win2kButton>
              <div style={{ marginLeft: "auto", fontSize: "10px", color: "#444" }}>
                {filteredSchemes.length} scheme(s) found
              </div>
            </div>

            {/* Schemes List */}
            <div style={{ padding: "10px 12px", background: "#FFFFFF" }}>
              {filteredSchemes.length === 0 ? (
                <div style={{ textAlign: "center", padding: "40px", color: "#808080" }}>
                  <div style={{ fontSize: "48px", marginBottom: "8px" }}>🔍</div>
                  <div style={{ fontSize: "13px", fontWeight: "bold" }}>No schemes found</div>
                  <div style={{ fontSize: "11px", marginTop: "4px" }}>Try adjusting your search or category filter.</div>
                </div>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
                  {filteredSchemes.map((scheme) => (
                    <SchemeCard key={scheme.id} scheme={scheme} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div style={statusBar}>
          <div style={statusSegment}>
            {activeCategory === "All" ? "All Categories" : `Category: ${activeCategory}`}
          </div>
          <div style={statusSegment}>{filteredSchemes.length} object(s)</div>
          <div style={statusSegment}>KrishiAI Gov Portal v1.0</div>
          <div style={{ marginLeft: "auto", ...statusSegment, borderLeft: "1px solid #808080" }}>
            🌐 Internet Zone
          </div>
        </div>
      </div>
    </div>
  );
}

function SchemeCard({ scheme }: { scheme: typeof schemes[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={win2kPanel}>
      {/* Card Title Bar */}
      <div style={{
        ...titleBar,
        padding: "3px 6px",
        cursor: "pointer",
        userSelect: "none",
      }} onClick={() => setExpanded(!expanded)}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontSize: "14px" }}>📋</span>
          <span style={{ fontWeight: "bold", fontSize: "11px" }}>{scheme.title}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{
            background: "#D4D0C8",
            color: "#000080",
            border: "1px solid #808080",
            padding: "0 6px",
            fontSize: "9px",
            fontWeight: "bold",
            letterSpacing: "0.05em",
          }}>{scheme.category.toUpperCase()}</span>
          <span style={{ fontSize: "11px", color: "#FFFFFF" }}>{expanded ? "▲" : "▼"}</span>
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: "8px", background: "#FFFFFF" }}>
        <p style={{ fontSize: "11px", color: "#333333", lineHeight: "1.5", marginBottom: "8px" }}>
          {scheme.description}
        </p>

        {/* Eligibility */}
        <div style={{ ...sunkenGroup, marginBottom: "8px" }}>
          <div style={groupLegend}>
            <CheckCircle2 size={10} color="#008000" style={{ marginRight: "3px" }} />
            Eligibility
          </div>
          <ul style={{ margin: "4px 0 4px 8px", padding: 0, listStyle: "none" }}>
            {scheme.eligibility.map((item, idx) => (
              <li key={idx} style={{ fontSize: "10px", color: "#000000", marginBottom: "2px", display: "flex", alignItems: "flex-start", gap: "4px" }}>
                <span style={{ color: "#008000", marginTop: "1px" }}>✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {expanded && (
          /* Benefits */
          <div style={{ ...raisedGroup, marginBottom: "8px", background: "#FFFFCC", border: "1px solid #808080" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "4px" }}>
              <Info size={12} color="#000080" />
              <span style={{ fontWeight: "bold", fontSize: "10px", color: "#000080" }}>KEY BENEFITS</span>
            </div>
            <p style={{ fontSize: "10px", color: "#333333", lineHeight: "1.5", margin: 0 }}>
              {scheme.benefits}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div style={{ display: "flex", gap: "6px", justifyContent: "flex-end", borderTop: "1px solid #D4D0C8", paddingTop: "6px", marginTop: "4px" }}>
          <Win2kButton primary onClick={() => { }}>
            <ExternalLink size={11} style={{ marginRight: "4px" }} />
            Apply Now
          </Win2kButton>
          <Win2kButton onClick={() => setExpanded(!expanded)}>
            {expanded ? "Hide Details" : "More Info..."}
          </Win2kButton>
        </div>
      </div>
    </div>
  );
}

// ----- Win2k Reusable Button Components -----
function Win2kButton({ children, onClick, primary }: { children: React.ReactNode; onClick?: () => void; primary?: boolean }) {
  const [pressed, setPressed] = useState(false);
  return (
    <button
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onClick={onClick}
      style={{
        background: primary ? "#000080" : "#D4D0C8",
        color: primary ? "#FFFFFF" : "#000000",
        border: pressed
          ? "2px inset #808080"
          : "2px outset #FFFFFF",
        borderColor: pressed
          ? "#808080 #FFFFFF #FFFFFF #808080"
          : "#FFFFFF #808080 #808080 #FFFFFF",
        borderStyle: "solid",
        borderWidth: "1px",
        padding: "3px 10px",
        fontSize: "11px",
        fontFamily: "'MS Sans Serif', Tahoma, Arial, sans-serif",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        outline: "none",
        minWidth: "60px",
        justifyContent: "center",
        transform: pressed ? "translateY(1px)" : "none",
        boxShadow: pressed
          ? "inset 1px 1px 2px rgba(0,0,0,0.3)"
          : "1px 1px 0 #FFFFFF inset, -1px -1px 0 #808080 inset",
      }}
    >
      {children}
    </button>
  );
}

function Win2kTitleBtn({ label, danger }: { label: string; danger?: boolean }) {
  return (
    <button
      style={{
        width: "16px",
        height: "14px",
        background: danger ? "#C0C0C0" : "#C0C0C0",
        border: "1px solid",
        borderColor: "#FFFFFF #808080 #808080 #FFFFFF",
        fontSize: "9px",
        lineHeight: "1",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#000000",
        fontFamily: "Marlett, Webdings, sans-serif",
        padding: 0,
      }}
    >{label}</button>
  );
}

function Win2kToolBtn({ label }: { label: string }) {
  return (
    <button
      style={{
        background: "#D4D0C8",
        border: "1px solid transparent",
        padding: "2px 5px",
        fontSize: "11px",
        cursor: "pointer",
        fontFamily: "'MS Sans Serif', Tahoma, Arial, sans-serif",
        color: "#000000",
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "#808080 #FFFFFF #FFFFFF #808080")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "transparent")}
    >{label}</button>
  );
}

// ----- Style Objects -----
const win2kWindow: React.CSSProperties = {
  border: "2px solid",
  borderColor: "#FFFFFF #808080 #808080 #FFFFFF",
  background: "#D4D0C8",
  display: "flex",
  flexDirection: "column",
  minHeight: "80vh",
  boxShadow: "2px 2px 8px rgba(0,0,0,0.4)",
  maxWidth: "1200px",
  margin: "0 auto",
};

const titleBar: React.CSSProperties = {
  background: "linear-gradient(to right, #000080, #1084D0)",
  color: "#FFFFFF",
  padding: "4px 6px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  userSelect: "none",
};

const titleIcon: React.CSSProperties = {
  width: "16px",
  height: "16px",
  background: "#000080",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const menuBar: React.CSSProperties = {
  background: "#D4D0C8",
  borderBottom: "1px solid #808080",
  padding: "2px 4px",
  display: "flex",
  gap: "0",
};

const menuItem: React.CSSProperties = {
  padding: "2px 8px",
  fontSize: "11px",
  cursor: "pointer",
  color: "#000000",
};

const toolbarBar: React.CSSProperties = {
  background: "#D4D0C8",
  borderBottom: "2px solid #808080",
  padding: "3px 6px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const sunkenField: React.CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid",
  borderColor: "#808080 #FFFFFF #FFFFFF #808080",
  padding: "2px 4px",
  fontSize: "11px",
};

const sidebarStyle: React.CSSProperties = {
  width: "160px",
  minWidth: "160px",
  background: "#ECE9D8",
  borderRight: "2px solid",
  borderColor: "#808080 #FFFFFF #FFFFFF #808080",
  overflowY: "auto",
};

const sidebarTitle: React.CSSProperties = {
  background: "#000080",
  color: "#FFFFFF",
  fontSize: "10px",
  fontWeight: "bold",
  padding: "3px 8px",
  letterSpacing: "0.05em",
};

const sidebarItem: React.CSSProperties = {
  padding: "4px 10px",
  fontSize: "11px",
  display: "flex",
  alignItems: "center",
};

const statusBar: React.CSSProperties = {
  background: "#D4D0C8",
  borderTop: "1px solid #808080",
  display: "flex",
  fontSize: "10px",
  padding: "2px 4px",
  gap: "2px",
};

const statusSegment: React.CSSProperties = {
  padding: "1px 8px",
  borderRight: "1px solid #808080",
  color: "#000000",
  display: "flex",
  alignItems: "center",
};

const win2kPanel: React.CSSProperties = {
  border: "2px solid",
  borderColor: "#FFFFFF #808080 #808080 #FFFFFF",
  background: "#D4D0C8",
  display: "flex",
  flexDirection: "column",
};

const sunkenGroup: React.CSSProperties = {
  border: "1px solid",
  borderColor: "#808080 #FFFFFF #FFFFFF #808080",
  background: "#F5F5F5",
  padding: "6px 8px",
  position: "relative",
};

const groupLegend: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: "bold",
  color: "#000080",
  marginBottom: "4px",
  display: "flex",
  alignItems: "center",
};

const raisedGroup: React.CSSProperties = {
  border: "1px solid",
  borderColor: "#FFFFFF #808080 #808080 #FFFFFF",
  padding: "6px 8px",
};
