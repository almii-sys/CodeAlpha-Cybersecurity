from scapy.all import sniff, IP, TCP, UDP, Raw

def packet_handler(packet):
    if IP in packet:
        ip_layer = packet[IP]
        print(f"Source IP: {ip_layer.src}")
        print(f"Destination IP: {ip_layer.dst}")
        
        # Map protocol number to name
        proto_name = {6: "TCP", 17: "UDP"}.get(ip_layer.proto, "Other")
        print(f"Protocol: {proto_name} ({ip_layer.proto})")
        
        # Show port numbers if available
        if TCP in packet:
            print(f"Source Port: {packet[TCP].sport}")
            print(f"Destination Port: {packet[TCP].dport}")
        elif UDP in packet:
            print(f"Source Port: {packet[UDP].sport}")
            print(f"Destination Port: {packet[UDP].dport}")
        
        # Show first 50 bytes of payload, if present
        if Raw in packet:
            print(f"Payload (first 50 bytes): {bytes(packet[Raw].load)[:50]}")
        
        print("-" * 50)

# Capture 10 packets
sniff(prn=packet_handler, count=10)
