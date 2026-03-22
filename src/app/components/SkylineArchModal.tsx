import { useCallback, useEffect } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  type Node,
  type Edge,
  Position,
  MarkerType,
  BackgroundVariant,
  Handle,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Monitor,
  FileOutput,
  Tablet,
  Radio,
  Cloud,
  Zap,
  Database,
  HardDrive,
  ServerCog,
} from "lucide-react";

/* ───────── Custom node ───────── */

const iconMap: Record<string, React.ElementType> = {
  nextApp: Monitor,
  staticExport: FileOutput,
  player: Tablet,
  wsServer: Radio,
  apiGateway: Cloud,
  lambda: Zap,
  dynamodb: Database,
  postgres: HardDrive,
  s3: ServerCog,
};

const colorMap: Record<string, { bg: string; border: string; glow: string }> = {
  nextApp:       { bg: "rgba(205,68,68,0.12)",  border: "rgba(205,68,68,0.5)",   glow: "0 0 24px rgba(205,68,68,0.15)" },
  staticExport:  { bg: "rgba(255,191,160,0.10)", border: "rgba(255,191,160,0.45)", glow: "0 0 20px rgba(255,191,160,0.10)" },
  player:        { bg: "rgba(205,68,68,0.12)",   border: "rgba(205,68,68,0.5)",   glow: "0 0 24px rgba(205,68,68,0.15)" },
  wsServer:      { bg: "rgba(76,175,125,0.12)",  border: "rgba(76,175,125,0.5)",  glow: "0 0 24px rgba(76,175,125,0.15)" },
  apiGateway:    { bg: "rgba(255,153,0,0.12)",   border: "rgba(255,153,0,0.45)",  glow: "0 0 20px rgba(255,153,0,0.10)" },
  lambda:        { bg: "rgba(255,153,0,0.12)",   border: "rgba(255,153,0,0.45)",  glow: "0 0 20px rgba(255,153,0,0.10)" },
  dynamodb:      { bg: "rgba(76,175,125,0.12)",  border: "rgba(76,175,125,0.5)",  glow: "0 0 24px rgba(76,175,125,0.15)" },
  postgres:      { bg: "rgba(100,149,237,0.12)", border: "rgba(100,149,237,0.5)", glow: "0 0 24px rgba(100,149,237,0.15)" },
  s3:            { bg: "rgba(76,175,125,0.12)",  border: "rgba(76,175,125,0.5)",  glow: "0 0 24px rgba(76,175,125,0.15)" },
};

function ArchNode({ data, id }: { data: { label: string; sub: string }; id: string }) {
  const Icon = iconMap[id] ?? Monitor;
  const colors = colorMap[id] ?? colorMap.nextApp;

  return (
    <>
      <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />

      <div
        style={{
          background: colors.bg,
          border: `1.5px solid ${colors.border}`,
          borderRadius: 14,
          padding: "18px 22px",
          minWidth: 170,
          backdropFilter: "blur(12px)",
          boxShadow: colors.glow,
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          cursor: "grab",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: colors.border.replace("0.5", "0.15").replace("0.45", "0.12"),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon size={19} color={colors.border.replace(/[\d.]+\)$/, "1)")} />
          </div>
        </div>
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "0.02em",
            lineHeight: 1.3,
          }}
        >
          {data.label}
        </div>
        <div
          style={{
            fontSize: 10.5,
            fontWeight: 500,
            color: "rgba(180,180,180,0.85)",
            marginTop: 3,
            lineHeight: 1.4,
          }}
        >
          {data.sub}
        </div>
      </div>
    </>
  );
}

const nodeTypes = { archNode: ArchNode };

/* ───────── Nodes ───────── */

const nodes: Node[] = [
  {
    id: "nextApp",
    type: "archNode",
    position: { x: 0, y: 0 },
    data: { label: "Next.js App", sub: "Experiências interativas" },
  },
  {
    id: "staticExport",
    type: "archNode",
    position: { x: 0, y: 150 },
    data: { label: "Static Export", sub: "next export → /out" },
  },
  {
    id: "player",
    type: "archNode",
    position: { x: 0, y: 310 },
    data: { label: "Skyline Player", sub: "Electron / Capacitor\nLicenças & Métricas" },
  },
  {
    id: "wsServer",
    type: "archNode",
    position: { x: 360, y: 230 },
    data: { label: "WebSocket Server", sub: "Controle de experiências\nHeartbeat & Status" },
  },
  {
    id: "apiGateway",
    type: "archNode",
    position: { x: 680, y: 60 },
    data: { label: "AWS API Gateway", sub: "Entrada REST / WS" },
  },
  {
    id: "lambda",
    type: "archNode",
    position: { x: 680, y: 230 },
    data: { label: "AWS Lambda", sub: "Funções serverless" },
  },
  {
    id: "s3",
    type: "archNode",
    position: { x: 400, y: 420 },
    data: { label: "AWS S3", sub: "Storage de projetos\n& experiências" },
  },
  {
    id: "dynamodb",
    type: "archNode",
    position: { x: 920, y: 120 },
    data: { label: "DynamoDB", sub: "Sessões, status\n& métricas" },
  },
  {
    id: "postgres",
    type: "archNode",
    position: { x: 920, y: 320 },
    data: { label: "PostgreSQL", sub: "Usuários, clientes\nprodutos" },
  },
];

/* ───────── Edges ───────── */

const edgeDefaults = {
  style: { strokeWidth: 2 },
  markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16 },
  labelStyle: {
    fontSize: 10,
    fontWeight: 600,
    fill: "rgba(180,180,180,0.9)",
    fontFamily: "'Poppins', sans-serif",
  },
  labelBgStyle: {
    fill: "rgba(9,10,14,0.85)",
    rx: 4,
    ry: 4,
  },
  labelBgPadding: [6, 4] as [number, number],
};

const edges: Edge[] = [
  {
    id: "e-next-export",
    source: "nextApp",
    target: "staticExport",
    label: "build & export",
    animated: true,
    style: { ...edgeDefaults.style, stroke: "rgba(205,68,68,0.6)" },
    markerEnd: { ...edgeDefaults.markerEnd, color: "rgba(205,68,68,0.6)" },
    labelStyle: edgeDefaults.labelStyle,
    labelBgStyle: edgeDefaults.labelBgStyle,
    labelBgPadding: edgeDefaults.labelBgPadding,
  },
  {
    id: "e-export-player",
    source: "staticExport",
    target: "player",
    label: "assets locais",
    animated: true,
    style: { ...edgeDefaults.style, stroke: "rgba(255,191,160,0.5)" },
    markerEnd: { ...edgeDefaults.markerEnd, color: "rgba(255,191,160,0.5)" },
    labelStyle: edgeDefaults.labelStyle,
    labelBgStyle: edgeDefaults.labelBgStyle,
    labelBgPadding: edgeDefaults.labelBgPadding,
  },
  {
    id: "e-player-ws",
    source: "player",
    target: "wsServer",
    label: "status & métricas",
    animated: true,
    style: { ...edgeDefaults.style, stroke: "rgba(76,175,125,0.5)" },
    markerEnd: { ...edgeDefaults.markerEnd, color: "rgba(76,175,125,0.5)" },
    labelStyle: edgeDefaults.labelStyle,
    labelBgStyle: edgeDefaults.labelBgStyle,
    labelBgPadding: edgeDefaults.labelBgPadding,
  },
  {
    id: "e-ws-player",
    source: "wsServer",
    target: "player",
    label: "experiências & updates",
    animated: true,
    style: { ...edgeDefaults.style, stroke: "rgba(76,175,125,0.4)" },
    markerEnd: { ...edgeDefaults.markerEnd, color: "rgba(76,175,125,0.4)" },
    labelStyle: edgeDefaults.labelStyle,
    labelBgStyle: edgeDefaults.labelBgStyle,
    labelBgPadding: edgeDefaults.labelBgPadding,
  },
  {
    id: "e-ws-api",
    source: "wsServer",
    target: "apiGateway",
    label: "heartbeat",
    animated: true,
    style: { ...edgeDefaults.style, stroke: "rgba(255,153,0,0.5)" },
    markerEnd: { ...edgeDefaults.markerEnd, color: "rgba(255,153,0,0.5)" },
    labelStyle: edgeDefaults.labelStyle,
    labelBgStyle: edgeDefaults.labelBgStyle,
    labelBgPadding: edgeDefaults.labelBgPadding,
  },
  {
    id: "e-api-lambda",
    source: "apiGateway",
    target: "lambda",
    label: "invocação",
    animated: true,
    style: { ...edgeDefaults.style, stroke: "rgba(255,153,0,0.5)" },
    markerEnd: { ...edgeDefaults.markerEnd, color: "rgba(255,153,0,0.5)" },
    labelStyle: edgeDefaults.labelStyle,
    labelBgStyle: edgeDefaults.labelBgStyle,
    labelBgPadding: edgeDefaults.labelBgPadding,
  },
  {
    id: "e-lambda-dynamo",
    source: "lambda",
    target: "dynamodb",
    label: "sessões & status",
    animated: true,
    style: { ...edgeDefaults.style, stroke: "rgba(76,175,125,0.5)" },
    markerEnd: { ...edgeDefaults.markerEnd, color: "rgba(76,175,125,0.5)" },
    labelStyle: edgeDefaults.labelStyle,
    labelBgStyle: edgeDefaults.labelBgStyle,
    labelBgPadding: edgeDefaults.labelBgPadding,
  },
  {
    id: "e-lambda-postgres",
    source: "lambda",
    target: "postgres",
    label: "CRUD persistente",
    animated: true,
    style: { ...edgeDefaults.style, stroke: "rgba(100,149,237,0.5)" },
    markerEnd: { ...edgeDefaults.markerEnd, color: "rgba(100,149,237,0.5)" },
    labelStyle: edgeDefaults.labelStyle,
    labelBgStyle: edgeDefaults.labelBgStyle,
    labelBgPadding: edgeDefaults.labelBgPadding,
  },
  {
    id: "e-ws-s3",
    source: "wsServer",
    target: "s3",
    label: "download experiências",
    animated: true,
    style: { ...edgeDefaults.style, stroke: "rgba(76,175,125,0.4)" },
    markerEnd: { ...edgeDefaults.markerEnd, color: "rgba(76,175,125,0.4)" },
    labelStyle: edgeDefaults.labelStyle,
    labelBgStyle: edgeDefaults.labelBgStyle,
    labelBgPadding: edgeDefaults.labelBgPadding,
  },
  {
    id: "e-s3-player",
    source: "s3",
    target: "player",
    label: "projetos offline",
    animated: true,
    style: { ...edgeDefaults.style, stroke: "rgba(76,175,125,0.35)" },
    markerEnd: { ...edgeDefaults.markerEnd, color: "rgba(76,175,125,0.35)" },
    labelStyle: edgeDefaults.labelStyle,
    labelBgStyle: edgeDefaults.labelBgStyle,
    labelBgPadding: edgeDefaults.labelBgPadding,
  },
];

/* ───────── Legend ───────── */

const legendItems = [
  { color: "rgba(205,68,68,0.7)", label: "Front-end / Player" },
  { color: "rgba(255,153,0,0.7)", label: "AWS Cloud" },
  { color: "rgba(76,175,125,0.7)", label: "Real-time & Storage" },
  { color: "rgba(100,149,237,0.7)", label: "Dados Persistentes" },
];

/* ───────── Modal Component ───────── */

interface Props {
  open: boolean;
  onClose: () => void;
}

export function SkylineArchModal({ open, onClose }: Props) {
  // close on Escape
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, handleKey]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "92vw",
              height: "85vh",
              maxWidth: 1300,
              borderRadius: 18,
              border: "1px solid rgba(205,68,68,0.2)",
              background: "rgba(9,10,14,0.97)",
              overflow: "hidden",
              boxShadow:
                "0 0 80px rgba(205,68,68,0.08), 0 40px 80px rgba(0,0,0,0.5)",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 26px",
                borderBottom: "1px solid rgba(205,68,68,0.12)",
                background: "rgba(205,68,68,0.03)",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Monograph', sans-serif",
                    fontSize: 22,
                    fontWeight: 500,
                    color: "#cd4444",
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  SKYLINE — ARQUITETURA
                </h3>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "rgba(180,180,180,0.7)",
                    margin: "6px 0 0",
                  }}
                >
                  Sistema offline-first com sincronização em tempo real via
                  WebSocket + AWS
                </p>
              </div>
              <button
                onClick={onClose}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                  color: "rgba(180,180,180,0.7)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(205,68,68,0.15)";
                  e.currentTarget.style.borderColor = "rgba(205,68,68,0.4)";
                  e.currentTarget.style.color = "#cd4444";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "rgba(180,180,180,0.7)";
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* React Flow */}
            <div style={{ width: "100%", height: "calc(100% - 78px)" }}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={{ padding: 0.25 }}
                proOptions={{ hideAttribution: true }}
                minZoom={0.3}
                maxZoom={2}
                defaultEdgeOptions={{ type: "smoothstep" }}
                style={{ background: "transparent" }}
              >
                <Background
                  variant={BackgroundVariant.Dots}
                  gap={28}
                  size={1}
                  color="rgba(205,68,68,0.08)"
                />
                <Controls
                  showInteractive={false}
                  style={{
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(9,10,14,0.9)",
                    overflow: "hidden",
                  }}
                />
              </ReactFlow>
            </div>

            {/* Legend */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                display: "flex",
                gap: 16,
                padding: "10px 16px",
                borderRadius: 10,
                background: "rgba(9,10,14,0.9)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(8px)",
              }}
            >
              {legendItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: item.color,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 10.5,
                      fontWeight: 600,
                      color: "rgba(180,180,180,0.75)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
