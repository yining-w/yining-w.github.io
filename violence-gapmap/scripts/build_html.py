"""Inline data/tool-data.json into src/index.template.html -> index.html."""
import sys
from pathlib import Path
root = Path(sys.argv[1] if len(sys.argv) > 1 else '.')
data = (root / 'data/tool-data.json').read_text().replace('</', '<\\/')
tpl = (root / 'src/index.template.html').read_text()
assert '/*__DATA__*/' in tpl
(root / 'index.html').write_text(tpl.replace('/*__DATA__*/', data))
print('wrote', root / 'index.html')
