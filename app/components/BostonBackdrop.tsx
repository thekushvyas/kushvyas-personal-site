// Fine line-art Boston skyline, fixed faintly behind every page.
// Zakim Bridge · Custom House · Hancock · Prudential · State House · Citgo · Longfellow Bridge · Charles River
export default function BostonBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[34vh] min-h-[200px] text-[#23324d] opacity-[0.13]"
      style={{
        maskImage: "linear-gradient(to top, black 55%, transparent)",
        WebkitMaskImage: "linear-gradient(to top, black 55%, transparent)",
      }}
    >
      <svg
        viewBox="0 0 1600 320"
        preserveAspectRatio="xMidYMax slice"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* ground line */}
        <path d="M0 260 H1600" />

        {/* Zakim Bridge */}
        <path d="M30 236 H370" />
        <path d="M110 260 L120 140 L130 260 M114 236 H126" />
        <path d="M270 260 L280 150 L290 260 M274 236 H286" />
        <path d="M120 140 L40 236 M120 140 L60 236 M120 140 L80 236 M120 140 L100 236 M120 140 L140 236 M120 140 L160 236 M120 140 L180 236 M120 140 L200 236" />
        <path d="M280 150 L210 236 M280 150 L230 236 M280 150 L250 236 M280 150 L300 236 M280 150 L320 236 M280 150 L340 236 M280 150 L360 236" />

        {/* left cluster */}
        <path d="M385 260 V178 H420 V260" />
        <path d="M392 190 H413 M392 205 H413 M392 220 H413 M392 235 H413" />
        {/* Custom House Tower */}
        <path d="M428 260 V122 H456 V260 M428 122 L442 98 L456 122 M442 98 V80" />
        <path d="M434 140 H450 M434 160 H450 M434 180 H450 M434 200 H450 M434 220 H450" />
        <path d="M464 260 V150 H512 V260 M470 150 V140 H506 V150" />
        <path d="M520 260 V112 H552 V260 M536 112 V100" />
        {/* John Hancock Tower */}
        <path d="M562 260 V58 L604 52 V260" />
        <path d="M583 55 V260" strokeOpacity="0.5" />
        <path d="M612 260 V140 H652 V260 M618 160 H646 M618 185 H646 M618 210 H646" />
        {/* Prudential Tower */}
        <path d="M662 260 V72 H708 V260 M670 72 V60 H700 V72 M685 60 V18" />
        <path d="M662 100 H708 M662 130 H708 M662 160 H708 M662 190 H708 M662 220 H708" strokeOpacity="0.5" />
        <path d="M716 260 V160 H752 V260" />
        {/* Massachusetts State House */}
        <path d="M762 260 V204 H852 V260 M762 204 H852 M770 204 V260 M844 204 V260" />
        <path d="M778 204 A29 29 0 0 1 836 204" />
        <path d="M800 176 V164 H814 V176 M807 164 V152" />
        <path d="M784 222 V250 M796 222 V250 M808 222 V250 M820 222 V250 M832 222 V250" strokeOpacity="0.5" />
        {/* building with Citgo sign */}
        <path d="M866 260 V186 H918 V260" />
        <path d="M876 184 V166 H908 V184 M876 166 L892 176 L908 166" />
        {/* mid cluster */}
        <path d="M928 260 V130 H966 V260 M934 150 H960 M934 175 H960 M934 200 H960 M934 225 H960" />
        <path d="M974 260 V96 L992 84 L1010 96 V260" />
        <path d="M1018 260 V142 H1058 V260 M1030 142 V130 H1046 V142" />
        <path d="M1066 260 V176 H1100 V260" />

        {/* Longfellow Bridge — "salt & pepper" towers and arches */}
        <path d="M1110 238 H1330" />
        <path d="M1110 238 Q1137 212 1164 238 Q1191 212 1218 238 Q1245 212 1272 238 Q1299 212 1326 238" />
        <path d="M1160 238 V206 H1170 V238 M1160 206 Q1165 196 1170 206" />
        <path d="M1270 238 V206 H1280 V238 M1270 206 Q1275 196 1280 206" />

        {/* Back Bay brownstones */}
        <path d="M1340 260 V200 L1356 190 L1372 200 V260 M1372 260 V196 H1400 V260 M1400 260 V204 L1414 194 L1428 204 V260" />
        <path d="M1436 260 V150 H1470 V260 M1442 170 H1464 M1442 195 H1464 M1442 220 H1464" />
        <path d="M1478 260 V186 H1520 V260 M1528 260 V206 H1560 V260 M1568 260 V222 H1600" />

        {/* Charles River */}
        <path d="M20 276 H240 M300 276 H620 M690 276 H1010 M1080 276 H1400 M1450 276 H1590" strokeOpacity="0.7" />
        <path d="M80 292 H380 M460 292 H760 M840 292 H1180 M1250 292 H1560" strokeOpacity="0.45" />
        <path d="M160 308 H520 M620 308 H980 M1060 308 H1420" strokeOpacity="0.25" />
        {/* sailboat */}
        <path d="M1200 272 H1226 L1220 278 H1206 Z M1213 272 V248 L1226 268 H1213" strokeOpacity="0.8" />
      </svg>
    </div>
  );
}
